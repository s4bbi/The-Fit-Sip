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
    <section className="max-w-screen mx-auto bg-white px-4 sm:px-6 md:px-20 py-8">
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-cgEB text-black mb-8 sm:mb-12">
          Why <span className="text-green">THE FIT SIP </span>?
        </h2>

        {/* Grid of Icons (always fit in one row) */}
        <div className="grid grid-cols-5 gap-4 sm:gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={item.icon}
                alt={item.text}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3"
              />
              <p className="text-[10px] sm:text-sm md:text-base font-sM text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
