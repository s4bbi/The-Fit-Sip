// src/pages/NotFound.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Title, Meta } from "react-head"; // ✅ SEO with react-head

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-404",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen bg-[#FBFBF4] text-center px-6 -mt-24"
    >
      {/* ✅ SEO Meta Tags */}
      <Title>404 Page Not Found | The Fit Sip</Title>
      <Meta
        name="description"
        content="Oops! The page you’re looking for doesn’t exist. Return to The Fit Sip homepage for healthy juices, smoothies, and meal plans in Gurgaon."
      />
      <Meta name="robots" content="noindex, nofollow" />

      {/* Big 404 */}
      <h1 className="animate-404 text-6xl md:text-8xl font-cgEB text-green mb-4">
        404
      </h1>

      {/* Message */}
      <p className="animate-404 text-lg md:text-xl font-sR text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Button Back Home */}
      <Link
        to="/"
        className="animate-404 inline-flex items-center justify-center bg-green text-white 
                   px-6 py-3 rounded-full font-sB text-sm sm:text-base hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
