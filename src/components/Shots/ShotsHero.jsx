import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import shotsHeroImg from "../../assets/Images/shots-hero.png";

const ShotsHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll("h1, p, img"),
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
    <section
      ref={heroRef}
      className="w-full bg-white flex flex-col pt-10 pb-12"
    >
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cgEB text-gray-900 leading-snug mb-3">
          Kickstart your mornings with{" "}
          <span className="text-green">Power Shots!</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR max-w-4xl mb-5">
          Small bottles, big impact. Cold-pressed shots packed with superfoods 
          to boost your immunity and energy every morning.
        </p>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={shotsHeroImg}
            alt="Healthy Shots"
            className="rounded-2xl w-screen object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ShotsHero;
