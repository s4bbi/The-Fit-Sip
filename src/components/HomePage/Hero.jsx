import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroimg from "../../assets/Images/heroimg.png";
import PrimaryButton from "../Common/CommonButton";

const Hero = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      gsap.fromTo(
        [
          el.querySelector("h1"),
          el.querySelector("p"),
          buttonRef.current,
          el.querySelector("img"),
        ],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="max-w-screen bg-white flex flex-col pt-10 pb-12">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cgEB text-gray-900 leading-snug mb-3">
          Looking for a <span className="text-green">healthier</span> way to{" "}
          <br className="hidden sm:block" />
          begin your day?
        </h1>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-sR max-w-3xl mb-6 px-4 sm:px-6 md:px-12">
          Weekly subscription delivery of fresh juices, shots, salads, oats & smoothies{" "}
          <br className="hidden sm:block" />
          free before 8 AM in Gurgaon.
        </p>

        <div className="flex mb-6" ref={buttonRef}>
          <PrimaryButton href="https://wa.me/919876543210" text="CHAT NOW" />
        </div>

        <div className="w-full flex justify-center px-2 md:px-8">
          <img
            src={heroimg}
            alt="Healthy food and juices"
            className="rounded-2xl w-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
