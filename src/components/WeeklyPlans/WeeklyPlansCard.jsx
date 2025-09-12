// src/components/WeeklyPlans/WeeklyPlanCard.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WeeklyPlanCard = ({ title, tagline, price, schedule, whatsappUrl }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 w-full hover:shadow-md transition">
      {/* Title + Tagline */}
      <div>
        <h3 className="text-lg md:text-xl font-cgEB text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-orange-500 font-sM mb-4">{tagline}</p>

        {/* Schedule */}
        <div className="grid grid-cols-2 gap-y-2 text-sm font-sR text-gray-800 mb-4">
          {schedule.map((s, idx) => (
            <React.Fragment key={idx}>
              <span className="font-sB">{s.day}</span>
              <span className="text-right">{s.item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-6">
        <span className="font-cgEB text-lg text-black">{price}</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-sm font-sB"
        >
          <FaWhatsapp className="w-4 h-4" /> BUY NOW
        </a>
      </div>
    </div>
  );
};

export default WeeklyPlanCard;
