import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import smoothiesContent from "../../data/smoothiesContent.js";

const SmoothiesGrid = () => {
  return (
    <section className="bg-[#FBFBF4] px-4 sm:px-6 md:px-20 py-12 font-sR">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {smoothiesContent.map((smoothie, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col sm:flex-col"
          >
            {/* Mobile Layout (Image Left, Content Right) */}
            <div className="flex sm:hidden gap-4">
              <img
                src={smoothie.image}
                alt={smoothie.title}
                className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex flex-col justify-between">
                <h3 className="font-sB text-base text-gray-900">{smoothie.title}</h3>
                <p className="text-xs text-gray-600">{smoothie.ingredients}</p>
                <p className="text-xs text-gray-700">{smoothie.calories}</p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex flex-col">
              <img
                src={smoothie.image}
                alt={smoothie.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="font-sB text-lg text-gray-900 mb-1">{smoothie.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{smoothie.ingredients}</p>
              <p className="text-sm text-gray-700 mb-4">{smoothie.calories}</p>
            </div>

            {/* Prices & Buttons (Visible on Both) */}
            <div className="mt-3 space-y-3">
              
              {/* <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Miniature</p>
                  <span className="font-cgEB text-black">{smoothie.miniaturePrice}</span>
                </div>
                <a
                  href={smoothie.whatsappMiniUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green text-white px-3 py-1.5 text-xs sm:text-sm rounded-full hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-4 h-4" /> BUY NOW
                </a>
              </div> */}

              {/* Regular */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Regular</p>
                  <span className="font-cgEB text-black">{smoothie.regularPrice}</span>
                </div>
                <a
                  href={smoothie.whatsappRegularUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green text-white px-3 py-1.5 text-xs sm:text-sm rounded-full hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-4 h-4" /> BUY NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmoothiesGrid;
