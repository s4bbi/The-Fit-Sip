import React from "react";
import juiceBottle from "../../assets/Images/juice-bottle.png"; 

const WhyJuices = () => {
  return (
    <section className="bg-[#FBFBF4] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
            Why our <span className="text-green">Juices?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR leading-relaxed">
            Our juices are cold-pressed fresh every morning to lock in maximum
            nutrition and natural flavor. No added sugar, no preservatives —
            just pure fruits and vegetables in every bottle. From immunity-boosting
            blends to refreshing citrus, we’ve got a juice for every mood.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 lg:w-xl h-64 bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={juiceBottle}
              alt="FitSip Juice Bottle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJuices;
