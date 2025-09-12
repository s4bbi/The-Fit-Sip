import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import saladsContent from "../../data/saladsContent.js"; // or juicesContent.js

const SaladsGrid = () => {
  return (
    <section className="bg-[#FBFBF4] px-4 sm:px-6 md:px-20 py-10 font-sR">
      {/* Grid only for sm and above */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {saladsContent.map((salad, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-4"
          >
            {/* ---- MOBILE VERSION (image left, text right) ---- */}
            <div className="flex sm:hidden items-center gap-4">
              {/* Image */}
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src={salad.image}
                  alt={salad.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between flex-1">
                <h3 className="font-sB text-base text-gray-900 mb-1">
                  {salad.title}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{salad.ingredients}</p>
                <p className="text-xs text-gray-500">{salad.calories}</p>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-2">
                  <span className="font-cgEB text-gray-900">{salad.price}</span>
                  <a
                    href={salad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green text-white px-3 py-1.5 rounded-full text-xs font-sB hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="h-3 w-3" />
                    BUY
                  </a>
                </div>
              </div>
            </div>

            {/* ---- DESKTOP/TABLET VERSION (normal grid card) ---- */}
            <div className="hidden sm:flex flex-col">
              <img
                src={salad.image}
                alt={salad.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-sB text-lg text-gray-900 mb-1">{salad.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{salad.ingredients}</p>
              <p className="text-sm text-gray-500 mb-2">{salad.calories}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="font-cgEB text-lg text-gray-900">{salad.price}</span>
                <a
                  href={salad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green text-white px-4 py-2 rounded-full text-sm font-sB hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaladsGrid;
