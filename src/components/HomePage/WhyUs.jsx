import React from "react";
// Import your custom icons
import juicedDaily from "../../assets/Icons/daily.svg";
import glassBottles from "../../assets/Icons/glass.svg";
import rawFresh from "../../assets/Icons/fresh.svg";
import noSugar from "../../assets/Icons/sugar.svg";
import delivery from "../../assets/Icons/delivery.svg";

const items = [
  { icon: juicedDaily, text: "Juiced Daily" },
  { icon: glassBottles, text: "Glass Bottles" },
  { icon: rawFresh, text: "Raw, Fresh & Unpasteurized" },
  { icon: noSugar, text: "No Sugar Added" },
  { icon: delivery, text: "Free Morning Delivery" },
];

export default function WhyUs() {
  return (
    <section className="max-w-screen mx-auto bg-white px-4 sm:px-6 md:px-20 py-10 sm:py-12">
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-cgEB text-black mb-8 sm:mb-12">
          Our Commitment to You!!
        </h2>

        {/* Grid of Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center px-2"
            >
              <img
                src={item.icon}
                alt={item.text}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 mb-3 sm:mb-4"
              />
              <p className="text-xs sm:text-sm md:text-base font-sM text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
