import React from "react";
import star from "../../assets/Icons/star.svg";

const Commitment = () => {
  return (
    <section className="w-full mx-auto bg-green px-6 md:px-20 py-12 my-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white">
        
        {/* Left heading with icons */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 flex-shrink-0 text-center md:text-left">
          <div className="flex space-x-3 mt-2 sm:mt-0">
          <h2 className="text-2xl md:text-4xl font-cgEB leading-tight">
            Our Commitment to <br className="hidden md:block" /> Healthy Living
          </h2>
            <img src={star} alt="Star Icon" className="h-8" />
          </div>
        </div>

        {/* Right paragraph */}
        <p className="max-w-lg text-sm sm:text-base font-sM text-center md:text-right">
          At The Fit Sip, we believe in delivering only the freshest, natural
          ingredients to your doorstep. Our products are free from sugar and
          preservatives, ensuring you enjoy wholesome nutrition every morning.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
