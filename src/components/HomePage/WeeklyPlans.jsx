import React from "react";
import { FaChevronRight } from "react-icons/fa"; // ✅ added
import { Link } from "react-router-dom";
import weekly from "../../assets/Images/delivery.png";
import star from "../../assets/Icons/star.svg";

export default function WeeklyPlans() {
  return (
    <section className="bg-orange px-6 md:px-20 pt-10 max-w-screen">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
        
        {/* Left Content */}
        <div className="text-white flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading with Sparkle */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <h2 className="text-2xl md:text-4xl font-cgEB leading-tight">
              Never run out of freshness!
            </h2>
            <img src={star} alt="Star Icon" className="h-8" />
          </div>

          {/* Info Pills */}
          <div className="space-y-4 mb-8 font-sR flex flex-col items-center md:items-start">
            {[
              "Freshly made every morning, delivered by 8 AM",
              "Flexible weekly plans, made for you",
              "Juices, Salads, Shots, Oats & More",
              "Starts at just Rs. 66/day"
            ].map((text, i) => (
              <div
                key={i}
                className="border-2 border-white rounded-md px-4 py-2 text-sm md:text-base w-fit"
              >
                {text}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/weekly-plans"
            className="bg-green hover:bg-green-600 transition text-white font-sB px-6 py-3 rounded-full text-sm md:text-base shadow-md flex items-center gap-2"
          >
            EXPLORE WEEKLY PLANS
            <FaChevronRight className="h-4 w-4" /> {/* ✅ Icon added */}
          </Link>
        </div>

        {/* Right Image flush to edge */}
        <div className="flex-1 justify-end -mx-6 md:-mx-16 flex">
          <img
            src={weekly}
            alt="Weekly Plans Crate"
            className="w-full max-w-md md:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
