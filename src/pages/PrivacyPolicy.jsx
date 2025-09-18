import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pp-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className="bg-[#FBFBF4] px-6 md:px-20 py-12 min-h-screen">
      <Title>Privacy Policy — The Fit Sip</Title>
      <Meta name="description" content="Privacy Policy of The Fit Sip explaining how we collect, use, and protect your personal data." />

      <div className="max-w-3xl mx-auto text-gray-900">
        <h1 className="pp-item text-2xl md:text-3xl font-cgEB mb-6 text-center">Privacy Policy – THE FIT SIP</h1>
        <p className="pp-item mb-4">At THE FIT SIP, we value your trust. Protecting your personal information and ensuring transparency in how we use it is a top priority.</p>
        <h2 className="pp-item font-sB text-lg text-gray-800 mt-6 mb-2">What This Policy Covers</h2>
        <p className="pp-item mb-4">This Privacy Policy applies to all information collected through our website <span className="text-green">www.thefitsip.in</span> and our online services.</p>
        <h2 className="pp-item font-sB text-lg text-gray-800 mt-6 mb-2">Information We Collect</h2>
        <ul className="pp-item list-disc list-inside space-y-2 text-gray-700">
          <li>Name, email, phone number, and address (when you sign up or place an order)</li>
          <li>Messages and info you share via forms or emails</li>
          <li>Technical data like IP, browser type, and device info</li>
        </ul>
        <h2 className="pp-item font-sB text-lg text-gray-800 mt-6 mb-2">How We Use Your Information</h2>
        <ul className="pp-item list-disc list-inside space-y-2 text-gray-700">
          <li>Deliver and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate for support and promotions</li>
          <li>Process payments securely</li>
          <li>Detect and prevent misuse</li>
        </ul>
        <p className="pp-item mt-6">For any questions or data requests, email us at <span className="font-sB">thefitsip.india@gmail.com</span>.</p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
