import React, { useRef, useEffect, useState, useCallback } from "react";
import { FaChevronRight, FaChevronLeft, FaBookOpen, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import plansContent from "../../data/plansContent.js";

const Plans = () => {
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
    if (!scrollContainer || !plansContent || plansContent.length === 0) return;

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
              }, 1500);
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

  // Manual scroll with arrows
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

      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      setTimeout(checkScrollBoundaries, 300);
    },
    [checkScrollBoundaries]
  );

  const handleMouseEnter = () => (isHovered.current = true);
  const handleMouseLeave = () => (isHovered.current = false);
  const handleScroll = useCallback(() => checkScrollBoundaries(), [checkScrollBoundaries]);

  if (!plansContent || plansContent.length === 0) {
    return (
      <section className="bg-white px-6 md:px-20 my-8">
        <div className="text-center text-gray-500 font-sR">No plans available</div>
      </section>
    );
  }

  const extendedContent = [
    ...plansContent,
    ...plansContent,
    ...plansContent.slice(0, 2),
  ];

  return (
    <section className="bg-white px-6 md:px-20 py-8">
      <div className="max-w-screen mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 leading-tight mb-4">
            Choose Weekly Plans Designed Around Your{" "}
            <span className="text-green">Health Goals</span>
          </h2>
          <p className="text-gray-700 font-sR text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every morning, <span className="font-sB">2,000+ subscribers</span> choose
            fresh living and better health.
          </p>
        </div>

        {/* Scrollable slider */}
        <div className="relative group mb-8">
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
                key={`plan-${idx}-${item.title}`}
                className="flex-shrink-0 w-72 md:w-80 bg-white rounded-2xl shadow-lg 
                           hover:shadow-xl hover:scale-[1.02] transition-all duration-300 
                           flex flex-col border border-gray-100 overflow-hidden"
                style={{ minHeight: '420px' }}
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/320/200';
                    }}
                  />
                  {/* Image overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge positioning */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-green text-white text-xs px-3 py-1.5 rounded-full font-sB shadow-lg">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Content Section with Proper Spacing */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Title and Description Area */}
                  <div className="flex-grow mb-6">
                    <h3 className="font-cgEB text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="font-sR text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Action Button - Always at Bottom */}
                  <div className="mt-auto">
                    <Link
                      to="/weekly-plans"
                      state={{ tab: item.link }}
                      className="inline-flex items-center justify-center gap-2 w-full bg-green text-white 
                                 px-6 py-3.5 rounded-full hover:bg-green-700 transition-all duration-300 
                                 text-sm font-sB hover:shadow-lg hover:scale-105 transform
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                                 group/button"
                      aria-label={`Explore ${item.title} plan`}
                    >
                      EXPLORE NOW 
                      <FaChevronRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
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
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-20 
                        transition-all duration-300 border border-gray-200
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
            className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-20 
                        transition-all duration-300 border border-gray-200
                        ${
                          canScrollRight
                            ? "hover:bg-gray-50 hover:shadow-xl hover:scale-110 text-gray-700"
                            : "opacity-50 cursor-not-allowed text-gray-400"
                        }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Full Menu + Contact Section */}
        <div className="text-center space-y-8">
          <a
            href="https://pdflink.to/3dbf1bb9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green text-white px-10 md:px-14 py-4 rounded-full font-sB 
                       hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base hover:scale-105 transform
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <FaBookOpen className="h-5 w-5" />
            Explore Our Full Menu
          </a>

          <div className="bg-gray-50/80 rounded-2xl px-8 pb-4 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-center sm:text-left">
              <h2 className="text-xl md:text-2xl text-gray-900 font-cgEB">
                Still confused?
              </h2>

              <a
                href="https://wa.link/24skdz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green text-white px-6 py-3 rounded-full font-sB 
                           hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg 
                           text-sm sm:text-base hover:scale-105 transform
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group/whatsapp"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 transition-transform group-hover/whatsapp:scale-110" />
                Contact Us
              </a>

              <h2 className="text-xl md:text-2xl text-gray-900 font-cgEB">
                anytime!!
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base mt-6 max-w-xl mx-auto font-sR leading-relaxed">
              Our nutrition experts are available 24/7 to help you choose the perfect plan for your lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Plans;
