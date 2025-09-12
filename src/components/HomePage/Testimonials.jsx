import React from "react";
import testimonialsContent from "../../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="bg-white px-6 md:px-20 my-6">
      <div className="max-w-screen mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-cgEB text-gray-900 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-700 font-sR mb-10">
          Loved by health-conscious families and professionals across Gurgaon
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonialsContent.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-sB text-gray-900 text-sm md:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-sR">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
