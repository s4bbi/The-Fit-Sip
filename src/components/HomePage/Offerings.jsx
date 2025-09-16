import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import offeringsContent from "../../data/offeringsContent.js";

const Offerings = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 280; // ~card width + gap
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full mx-auto bg-white px-6 md:px-20 my-8" id="offerings">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-cgEB mb-10 text-gray-900 text-center">
        What We Offer ?
      </h2>

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
          {offeringsContent.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-60 md:w-64 bg-white rounded-xl shadow-md 
                         hover:shadow-lg transition flex flex-col snap-start"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-xl"
              />

              {/* Text Content */}
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-sB text-lg text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="font-sR text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                {/* Button as Link */}
                <Link
                  to={item.link}
                  className="w-32 bg-green text-white px-4 py-2 rounded-full 
                             flex items-center gap-2 hover:bg-green-600 transition 
                             text-sm font-sB mt-auto"
                >
                  VIEW ALL <FaChevronRight className="h-4 w-4" />
                </Link>
              </div>
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

export default Offerings;
