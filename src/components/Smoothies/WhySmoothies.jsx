import React from "react";
import smoothiesBowl from "../../assets/Images/smoothiebowl.jpg"; // replace with your actual image

const WhySmoothies = () => {
  return (
    <section className="bg-[#FBFBF4] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
            Why our <span className="text-green">Smoothies?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR leading-relaxed">
            Our smoothies are crafted with the finest seasonal fruits, nuts, seeds, 
            and plant-based ingredients. They are nutrient-dense, naturally sweetened, 
            and rich in fiber — making them a perfect post-workout fuel, breakfast, 
            or guilt-free snack. No added sugar, no artificial flavors.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-64 lg:w-xl bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={smoothiesBowl}
              alt="FitSip Smoothie Bowl"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmoothies;
