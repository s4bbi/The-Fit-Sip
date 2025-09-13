import React from "react";
import shotsBottle from "../../assets/Images/shots.png";

const WhyShots = () => {
  return (
    <section className="bg-[#FBFBF4] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
            Why our <span className="text-green">Shots?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR leading-relaxed">
            Our cold-pressed shots are made with superfoods and adaptogens
            that help strengthen immunity, boost metabolism, and keep you
            energized. Compact, convenient, and crafted fresh every morning.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-64 lg:w-xl bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={shotsBottle}
              alt="FitSip Juice Bottle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShots;
