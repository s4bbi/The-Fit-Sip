import React, { useRef, useEffect, useState, useCallback } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import offeringsContent from "../../data/offeringsContent.js";

const Offerings = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll boundaries
  const checkScrollBoundaries = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd =
      container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  }, []);

  // Auto scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !offeringsContent || offeringsContent.length === 0)
      return;

    const initializeScroll = () => {
      if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

      const scrollSpeed = 1.5;
      const startAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
          if (!isHovered.current && scrollContainer) {
            const currentScroll = scrollContainer.scrollLeft;
            const maxScroll =
              scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (currentScroll >= maxScroll - 10) {
              scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
              setTimeout(() => {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  startAutoScroll();
                }
              }, 1000);
            } else {
              scrollContainer.scrollLeft += scrollSpeed;
            }

            checkScrollBoundaries();
          }
        }, 20);
      };

      startAutoScroll();
    };

    const timer = setTimeout(initializeScroll, 500);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [checkScrollBoundaries]);

  // Manual scroll
  const scroll = useCallback(
    (direction) => {
      const container = scrollRef.current;
      if (!container) return;

      if (intervalRef.current) clearInterval(intervalRef.current);

      const scrollAmount = 300;
      const targetScroll =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });

      setTimeout(checkScrollBoundaries, 300);
    },
    [checkScrollBoundaries]
  );

  // Handle scroll events for button states
  const handleScroll = useCallback(() => {
    checkScrollBoundaries();
  }, [checkScrollBoundaries]);

  // Hover controls
  const handleMouseEnter = () => (isHovered.current = true);
  const handleMouseLeave = () => (isHovered.current = false);

  if (!offeringsContent || offeringsContent.length === 0) {
    return (
      <section className="w-full mx-auto bg-white px-6 md:px-20 mt-8 md:my-8">
        <div className="text-center text-gray-500 font-sR">
          No offerings available
        </div>
      </section>
    );
  }

  const extendedContent = [
    ...offeringsContent,
    ...offeringsContent,
    ...offeringsContent.slice(0, 3),
  ];

  return (
    <section
      id="offerings"
      className="w-full mx-auto bg-white px-6 md:px-20 mt-8"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-3">
          What all we offer?
        </h2>
        <p className="text-gray-600 font-sR text-base max-w-md mx-auto">
          Fresh, healthy, and delicious — discover what makes The Fit Sip special!
        </p>
      </div>

      {/* Scrollable Section */}
      <div className="relative group">
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {extendedContent.map((item, idx) => (
            <div
              key={`offering-${idx}-${item.title}`}
              className="flex-shrink-0 w-60 md:w-64 bg-white rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-300 flex flex-col border border-gray-100 
                         hover:scale-[1.02] h-80"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/300/200'; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content with proper flex layout for button positioning */}
              <div className="p-5 flex flex-col flex-grow text-left">
                {/* Content section that grows to fill space */}
                <div className="flex-grow">
                  <h3 className="font-cgEB text-lg text-gray-900 mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sR text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Button anchored to bottom */}
                <div className="mt-auto pt-2">
                  <Link
                    to={item.link}
                    className="inline-flex items-center justify-center gap-2 w-full bg-green text-white 
                             px-5 py-2.5 rounded-full font-sB text-sm hover:bg-green-700 
                             transition-all duration-300 shadow hover:shadow-md hover:scale-105 transform
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label={`View all ${item.title} offerings`}
                  >
                    VIEW ALL <FaChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 
                     bg-white shadow-lg p-4 rounded-full z-20 border border-gray-200
                     transition-all duration-300
                     ${
                       canScrollLeft
                         ? "hover:bg-gray-50 hover:shadow-xl hover:scale-110 text-gray-700"
                         : "opacity-50 cursor-not-allowed text-gray-400"
                     }`}
          aria-label="Scroll left"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 
                     bg-white shadow-lg p-4 rounded-full z-20 border border-gray-200
                     transition-all duration-300
                     ${
                       canScrollRight
                         ? "hover:bg-gray-50 hover:shadow-xl hover:scale-110 text-gray-700"
                         : "opacity-50 cursor-not-allowed text-gray-400"
                     }`}
          aria-label="Scroll right"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Fade edges for better UX */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Custom scrollbar hiding styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Offerings;
