// src/components/Common/Loader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/fitsip-logo.svg";

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef(null);
  const fillRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          onComplete: onLoaded,
        });
      },
    });

    // Bottle fill animation (from bottom to top)
    tl.fromTo(
      fillRef.current,
      { scaleY: 0, transformOrigin: "bottom" },
      { scaleY: 1, duration: 2.5 }
    );

    // Animate percentage counter (0% to 100%)
    tl.fromTo(
      percentRef.current,
      { innerText: 0 },
      {
        innerText: 100,
        duration: 2.5,
        snap: { innerText: 1 },
        onUpdate: function () {
          percentRef.current.innerText = Math.round(this.targets()[0].innerText) + "%";
        },
      },
      "<" // start at same time as fill
    );

    return () => tl.kill();
  }, [onLoaded]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center font-cgEB"
    >
      <img src={logo} alt="The Fit Sip Logo" className="h-16 md:h-20 mb-8" />

      {/* Bottle Wrapper */}
      <div className="relative w-[80px] md:w-[120px] h-[160px] md:h-[220px] border-4 border-green-600 rounded-b-3xl rounded-t-lg overflow-hidden shadow-lg">
        {/* Fill Area */}
        <div
          ref={fillRef}
          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-lime-300 origin-bottom scale-y-0"
        ></div>

        {/* Percentage Text */}
        <div
          ref={percentRef}
          className="absolute inset-0 flex items-center justify-center text-green-800 text-xl md:text-2xl"
        >
          0%
        </div>
      </div>

      <p className="mt-6 text-green-700 tracking-wide text-lg md:text-xl">
        Filling up freshness...
      </p>
    </div>
  );
};

export default Loader;
