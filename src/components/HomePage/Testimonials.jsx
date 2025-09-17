import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import testimonialsContent from "../../data/testimonials.js";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 340; // ~card width + gap
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white px-6 md:px-20 mt-8 md:my-8 relative">
      {/* Section Title */}
      <h2 className="max-w-screen mx-auto text-2xl md:text-3xl font-cgEB mb-2 text-gray-900 text-center">
        What Our
        {" "}
            <span className="text-green">Customers </span>
          Say ?
      </h2>
      <p className="text-center text-gray-700 font-sR mb-10">
        Every morning, 2,000+ subscribers choose fresh living and better health.
      </p>

      {/* Scrollable Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth snap-x snap-mandatory"
        >
          {testimonialsContent.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 md:w-80 bg-white rounded-xl shadow-md 
                         hover:shadow-lg transition flex flex-col snap-start p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-sB text-gray-900 text-sm md:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-sR">"{item.text}"</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
        >
          <FaChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
