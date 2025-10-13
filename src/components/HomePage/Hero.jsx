import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import PrimaryButton from "../Common/CommonButton";
import hero1 from "../../assets/Images/heroimg.png";
import hero2 from "../../assets/Images/weekly-hero.png";
import hero3 from "../../assets/Images/fruit-hero.png";
import hero4 from "../../assets/Images/slideshow/juices.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <section className="bg-white flex flex-col pt-4 pb-2 md:pb-8">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-cgEB text-gray-900 leading-snug mb-3 pt-4">
          Looking for a <span className="text-green">healthier</span> way to{" "}
          <br className="hidden sm:block" />
          begin your day?
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-sR max-w-3xl mb-6 px-4 sm:px-6 md:px-12">
          <span className="text-green font-sB">The Fit Sip</span> is delivering
          fresh & healthy juices, shots, salads, oats, and more every morning
          across Gurgaon with{" "}
          <span className="font-sB">weekly subscriptions</span> for everything!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <PrimaryButton href="https://wa.link/24skdz" text="ORDER NOW" />

          {/* Explore Menu Button */}
          <a
            href="https://pdflink.to/3dbf1bb9/" // 🔗 Replace with your actual menu PDF link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border-2 border-green text-green px-6 py-3 rounded-full font-sB 
                       hover:bg-green hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
          >
            Explore Our Full Menu
          </a>
        </div>

        {/* Swiper Slider */}
        <div className="w-full rounded-2xl shadow-md overflow-hidden mt-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="w-full h-[240px] sm:h-[360px] md:h-[480px] lg:h-[600px] xl:h-[700px]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
