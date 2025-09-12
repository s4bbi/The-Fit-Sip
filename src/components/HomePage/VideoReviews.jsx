import React from "react";
import { FaPlay } from "react-icons/fa";
import videoReviewsContent from "../../data/videoReviews.js";

export default function VideoReviews() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-20 my-8">
      <div className="max-w-screen mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl text-center font-cgEB text-gray-900 mb-2">
          See it for yourself!!
        </h2>
        <p className="text-gray-700 text-center font-sR mb-8">
          Checkout our video reviews
        </p>

        {/* Scrollable Row */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth snap-x snap-mandatory">
          {videoReviewsContent.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-44 sm:w-52 md:w-64 h-56 sm:h-60 md:h-64 bg-gray-300 rounded-xl relative flex items-center justify-center snap-start"
            >
              {/* Thumbnail */}
              <img
                src={video.src}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black bg-opacity-50 rounded-full p-3 sm:p-4">
                  <FaPlay className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
