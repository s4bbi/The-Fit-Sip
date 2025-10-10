import React, { useRef } from "react";
import { FaPlay, FaUsers, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import videoReviewsContent from "../../data/videoReviews.js";

export default function VideoReviews() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280; // adjust to your card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 md:px-20 mb-8">
      <div className="max-w-screen mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl text-center font-cgEB text-gray-900 mb-2">
          See it for yourself!!
        </h2>
        <p className="text-gray-700 text-center font-sR mb-8">
          Checkout our video reviews
        </p>

        {/* Scrollable Row with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Thumbnails Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth snap-x snap-mandatory"
          >
            {videoReviewsContent.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-44 sm:w-52 md:w-64 h-56 sm:h-60 md:h-72 
                           bg-gray-300 rounded-xl relative flex items-center justify-center snap-start"
              >
                {/* Thumbnail */}
                <img
                  src={video.src}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover rounded-xl brightness-75"
                />

                {/* Play Button Overlay with Link */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={video.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green bg-opacity-50 rounded-full p-3 sm:p-4 hover:bg-opacity-70 transition"
                  >
                    <FaPlay className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Community Button */}
        <div className="text-center mt-10">
          <a
            href="https://chat.whatsapp.com/JiJ5ITO6XlhGhZ6NUutXRR" // 🔗 replace with your actual Google Drive PDF link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-white px-6 md:px-12 py-3 rounded-full font-sB 
                                hover:bg-green-900 transition shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <FaUsers className="w-5 h-5" />
            Join Our Health Community
          </a>
        </div>
      </div>
    </section>
  );
}
