import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WeeklyReviews = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "h2, p, img, .stat",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.15,
            from: "start",
            amount: 0.6,
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 md:px-20 pt-12 border-t border-b"
    >
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-cgEB text-center mb-6 text-black">
        Loved by{" "}
        <span className="text-orange">500+ Health Enthusiasts</span> in Gurgaon
      </h2>

      <hr className="border-gray-300 mb-6" />

      {/* Stats Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-center font-sM">
        {/* Left Text */}
        <p className="stat text-gray-800 font-sB">
          Our Customers Say: <span className="font-cgEB">EXCELLENT!</span>
        </p>

        {/* Rating */}
        <div className="stat flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-cgEB text-black">
              4.9 🌟🌟🌟🌟🌟
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Based on 2,895 customer reviews
          </p>
        </div>

        {/* Right Text */}
        <p className="stat text-gray-800 font-sB">Google Reviews</p>
      </div>

      {/* Bottom line */}
      <hr className="border-gray-300 mt-6" />
    </section>
  );
};

export default WeeklyReviews;
