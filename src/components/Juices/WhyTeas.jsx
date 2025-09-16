import React from "react";
import teaBottle from "../../assets/Images/tea1.png"; 

const WhyTeas = () => {
  return (
    <section className="bg-[#FBFBF4] px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
            Why our <span className="text-green">Teas?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR leading-relaxed">
             Our teas are carefully brewed with premium natural ingredients to
            deliver both taste and health benefits. From antioxidant-rich green
            teas to calming herbal blends, each sip supports your well-being. 
            No artificial flavors, just pure leaves and herbs brewed to
            perfection — making your mornings fresher and evenings calmer.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 lg:w-xl h-64 bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={teaBottle}
              alt="FitSip Tea Bottle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTeas;
