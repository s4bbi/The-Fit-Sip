// src/components/Common/Loader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/fitsip-logo.svg"; // ✅ your logo

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Simulate a short load (2 seconds) then fade out
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        onComplete: onLoaded, // notify parent when done
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <img
        src={logo}
        alt="The Fit Sip Logo"
        className="h-16 md:h-24 mb-6 animate-pulse"
      />
      <p className="text-green font-cgEB text-lg md:text-xl tracking-wide">
        Loading freshness...
      </p>
    </div>
  );
};

export default Loader;
