import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WeeklyHeroImg from "../../assets/Images/weekly-hero.png";

const WeeklyHero = () => {
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
      className="w-full bg-white flex flex-col pb-12"
    >
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-12">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cgEB text-gray-900 leading-snug mb-3">
          Ready to stay  {" "}
          <span className="text-orange">healthy </span>
          all week long?
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg font-sR max-w-4xl mb-5">
          Choose from our flexible weekly plans — fresh juices, smoothies, shots, and more delivered right to your doorstep every morning from Monday to Saturday.
        </p>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={WeeklyHeroImg}
            alt="Fresh Fruits Variety"
            className="rounded-2xl w-screen object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WeeklyHero;
