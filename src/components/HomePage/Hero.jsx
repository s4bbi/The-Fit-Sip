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
// import hero5 from "../../assets/Images/slideshow/shots.png";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <section className="bg-white flex flex-col pt-4 pb-2 md:pb-12">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-cgEB text-gray-900 leading-snug mb-3">
          Looking for a <span className="text-green">healthier</span> way to{" "}
          <br className="hidden sm:block" />
          begin your day?
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-sR max-w-3xl mb-6 px-4 sm:px-6 md:px-12">
          Weekly subscription delivery of fresh juices, shots, salads, oats & smoothies{" "}
          <br className="hidden sm:block" />
          free before 8 AM in Gurgaon.
        </p>

        {/* Button */}
        <div className="flex mb-6">
          <PrimaryButton href="https://wa.link/24skdz" text="CHAT NOW" />
        </div>

        {/* Responsive Swiper Slider */}
        <div className="w-full rounded-2xl shadow-md overflow-hidden">
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
