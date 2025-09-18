import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShippingPolicy = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".sp-item",{y:30,opacity:0},{y:0,opacity:1,duration:0.8,stagger:0.15,ease:"power3.out",scrollTrigger:{trigger:ref.current,start:"top 80%"}});  
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className="bg-[#FBFBF4] px-6 md:px-20 py-12 min-h-screen">
      <Title>Shipping Policy — The Fit Sip</Title>
      <Meta name="description" content="Shipping policy of The Fit Sip detailing delivery windows, free delivery terms, and coverage." />

      <div className="max-w-3xl mx-auto text-gray-900">
        <h1 className="sp-item text-2xl md:text-3xl font-cgEB mb-6 text-center">Shipping & Delivery Policy</h1>
        <p className="sp-item text-gray-700 mb-4">We provide free early-morning delivery to all our subscribers in Gurgaon.</p>
        <ul className="sp-item list-disc list-inside space-y-3 text-gray-700">
          <li>Delivery time is between <span className="font-sB">7:00 AM – 8:30 AM</span>.</li>
          <li>Free delivery on all subscription plans.</li>
          <li>Customers must return empty bottles next day.</li>
          <li>Please inform us same day if delivery not received.</li>
        </ul>
      </div>
    </main>
  );
};

export default ShippingPolicy;
