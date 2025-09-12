import React from "react";
import fruits from "../../assets/Images/fruits.jpg"; // replace with your actual image

const WhyFruits = () => {
  return (
    <section className="bg-[#FBFBF4] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
            Why our <span className="text-green">Fruit Bowls?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR leading-relaxed">
            Our fruit bowls are freshly curated every morning with seasonal, 
            nutrient-rich fruits. Perfectly portioned, preservative-free, and 
            ready to fuel your body with natural energy and hydration. 
            From juicy tropicals to classic favorites, there’s a bowl for every mood.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 lg:w-xl h-64 bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={fruits}
              alt="FitSip Fruit Bowl"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFruits;
