import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";
import smoothiesHeroImg from "../../assets/Images/smoothie-hero.png";

const SmoothiesHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll("h1, p, a, img"),
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
          Creamy, Nutritious &{" "}
          <span className="text-green">Refreshing Smoothies</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR max-w-4xl mb-5">
          Blended to perfection with fresh fruits, nuts, seeds, and superfoods.  
          Our smoothies are naturally delicious, energizing, and delivered chilled every morning.
        </p>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={smoothiesHeroImg}
            alt="Smoothies Variety"
            className="rounded-2xl w-screen object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SmoothiesHero;
