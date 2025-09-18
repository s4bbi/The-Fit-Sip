// src/pages/TermsOfService.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
  const sectionRef = useRef(null);

  const terms = [
    "Quantity: 200 ml",
    "Used bottles must be returned on the next day.",
    "Payment needs to be done within 24 hours of bill generation, usually at the end of your plan or weekend, whichever is earlier.",
    "If you do not receive delivery on any given day, please notify us the same day to keep our records accurate and up to date.",
    "We use 100% fresh and natural ingredients with no added sugar, preservatives, or salt.",
    "All recommended drinks are curated based on the benefits of their ingredients and are suggested by nutritionists and dieticians.",
    "Please check for any allergies before consumption and confirm the ingredients. The Fit Sip is not liable for any reactions.",
    "If you have any specific health concerns, we recommend conducting your own research or consulting a healthcare professional before ordering.",
    "Delivery time is between 7:00 AM to 8:30 AM.",
    "Use our website for personal, non-commercial purposes only.",
    "Do not copy, republish, sell, or redistribute content without permission.",
    "We use cookies to improve browsing experience.",
    "All content belongs to THE FIT SIP (unless otherwise stated).",
    "You are responsible for comments or feedback posted by you.",
    "Links to our website must be fair and legal; logo usage requires approval.",
    "We are not responsible for third-party websites linked from our site.",
    "We strive for accurate info but cannot guarantee it always.",
    "THE FIT SIP is not liable for issues arising from site usage.",
    "We may update these Terms at any time; updates are effective immediately.",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".term-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
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
      className="w-full bg-[#FBFBF4] px-6 md:px-20 py-12"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-cgEB text-gray-900 text-center mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-700 text-center font-sR mb-10 max-w-xl mx-auto">
          Please read our terms carefully before subscribing to our weekly
          plans.
        </p>

        {/* Terms List */}
        <ul className="space-y-4 list-disc list-inside text-gray-800 font-sR">
          {terms.map((term, idx) => (
            <li key={idx} className="term-item leading-relaxed">
              {term}
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <p className="mt-10 text-sm text-gray-600 text-center term-item">
          By subscribing to our services, you acknowledge that you have read and
          agreed to these terms.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
