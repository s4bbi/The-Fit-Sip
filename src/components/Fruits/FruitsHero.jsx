import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FruitsHeroImg from "../../assets/Images/fruit-hero.png";

const FruitsHero = () => {
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
          Fresh, Colorful & Wholesome{" "}
          <span className="text-green">Fruit Bowls</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR max-w-4xl mb-5">
          Start your mornings with vibrant fruit bowls packed with vitamins,
          minerals, and antioxidants — freshly prepared and delivered before 8 AM.
        </p>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={FruitsHeroImg}
            alt="Fresh Fruits Variety"
            className="rounded-2xl w-screen object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FruitsHero;
