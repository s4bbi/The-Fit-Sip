import React from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ import Link
import weekly from "../../assets/Images/weekly.png";
import star from "../../assets/Icons/star.svg";

export default function WeeklyPlans() {
  return (
    <section className="bg-orange px-6 md:px-20 py-12 lg:py-20 w-screen mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
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
              "Delivery before 8 AM",
              "Choose from 12+ healthy Plans",
              "Starting from Rs. 400 only per week",
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
            className="bg-green hover:bg-green-600 transition text-white font-sB px-6 py-3 rounded-full text-sm md:text-base shadow-md"
          >
            EXPLORE WEEKLY PLANS
          </Link>
        </div>

        {/* Right Image flush to edge */}
        <div className="flex-1 flex justify-end -mx-6 md:-mx-20 -my-12 lg:-my-20">
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
