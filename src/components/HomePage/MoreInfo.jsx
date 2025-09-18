import React from "react";
// Import your custom icons
import energy from "../../assets/Icons/energy.svg";
import weight from "../../assets/Icons/weight.svg";
import skin from "../../assets/Icons/skin.svg";
import gut from "../../assets/Icons/gut.svg";
import immunity from "../../assets/Icons/immunity.svg";

const items = [
  { icon: energy, text: "Boost energy and Focus" },
  { icon: weight, text: "Weight Management" },
  { icon: skin, text: "Clear Skin" },
  { icon: gut, text: "Improve Gut Health" },
  { icon: immunity, text: "Boost Immunity" },
];

export default function MoreInfo() {
  return (
    <section className="max-w-screen mx-auto bg-white px-4 sm:px-6 md:px-20 pt-10 md:py-4">
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-cgEB text-black mb-8 sm:mb-12">
          Boost your day with <span className="text-green">The Fit Sip</span>
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
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 mb-2 sm:mb-3"
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
