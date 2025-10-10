// src/pages/TermsOfService.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCertificate, FaReceipt, FaTruck, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
  const sectionRef = useRef(null);

  const termsSections = [
    {
      title: "Product & Delivery Terms",
      icon: <FaTruck className="text-green text-xl" />,
      terms: [
        "Quantity: 200 ml per serving",
        "Used bottles and jars must be returned on next day",
        "Delivery time is between 7:00 AM to 8:30 AM",
        "If you do not receive delivery on any given day, please notify us that same day to keep our records accurate and up to date"
      ]
    },
    {
      title: "Payment & Billing",
      icon: <FaReceipt className="text-blue-600 text-xl" />,
      terms: [
        "Payment needs to be done within 24 hours of bill generation, usually at the end of your plan or weekend, whichever is earlier",
        "5% GST will be applicable on total amount",
        "GST Number: 06AAECW1197M1ZV"
      ]
    },
    {
      title: "Health & Safety",
      icon: <FaShieldAlt className="text-red-500 text-xl" />,
      terms: [
        "We use 100% fresh and natural ingredients with no added sugar, preservatives or salt",
        "All recommended drinks are curated based on the benefits of their ingredients and are suggested by nutritionists and dieticians",
        "Please check the product by smelling it and taking one sip before consuming",
        "Please check for any allergies before consumption and confirm the ingredients",
        "Please check the bottle carefully before consuming. It may get damaged during transit",
        "For safety, we recommend transferring the juice into a glass before drinking",
        "If you have any specific health concerns, we recommend conducting your own research or consulting a healthcare professional before ordering"
      ]
    },
    {
      title: "Legal & Compliance",
      icon: <FaCertificate className="text-purple-600 text-xl" />,
      terms: [
        "FSSAI License: 20824005004774",
        "Use our website for personal, non-commercial purposes only",
        "Do not copy, republish, sell, or redistribute content without permission",
        "We use cookies to improve browsing experience",
        "All content belongs to THE FIT SIP (unless otherwise stated)",
        "You are responsible for comments or feedback posted by you",
        "Links to our website must be fair and legal; logo usage requires approval",
        "We are not responsible for third-party websites linked from our site"
      ]
    },
    {
      title: "Liability & Disclaimers",
      icon: <FaExclamationTriangle className="text-orange-500 text-xl" />,
      terms: [
        "The Fit Sip is not liable for any allergic reactions or health issues",
        "We strive for accurate information but cannot guarantee it always",
        "THE FIT SIP is not liable for issues arising from site usage",
        "We may update these Terms at any time; updates are effective immediately"
      ]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section headers
      gsap.fromTo(
        ".section-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate term items
      gsap.fromTo(
        ".term-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      className="w-full bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cgEB text-gray-900 mb-4">
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-lg font-sR max-w-2xl mx-auto leading-relaxed">
            Please read our terms carefully before subscribing to our weekly plans. 
            These terms ensure quality service and mutual understanding.
          </p>
        </div>

        {/* Company Information Highlight */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-100">
          <div className="text-center">
            <h3 className="text-xl font-cgEB text-gray-900 mb-4">Company Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green/5 p-4 rounded-lg border border-green/20">
                <div className="text-green font-sB mb-1">Operating Under</div>
                <div className="text-gray-800 font-cgEB">Wellory Living Pvt. Ltd.</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-blue-700 font-sB mb-1">FSSAI License</div>
                <div className="text-blue-800 font-mono font-bold">20824005004774</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Section Header */}
              <div className="section-header flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="p-3 bg-gray-50 rounded-full">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-cgEB text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Terms List */}
              <ul className="space-y-4">
                {section.terms.map((term, termIdx) => (
                  <li key={termIdx} className="term-item flex items-start gap-3 text-gray-700 font-sR leading-relaxed">
                    <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="flex-1">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-orange/10 to-red/10 rounded-2xl p-8 border-l-4 border-orange">
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="text-orange text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-cgEB text-gray-900 mb-3">Important Notice</h3>
              <p className="text-gray-700 font-sR leading-relaxed mb-4">
                By subscribing to our services, you acknowledge that you have read, understood, 
                and agreed to all the terms and conditions mentioned above. These terms are 
                designed to ensure the best service quality and safety for all our customers.
              </p>
              <p className="text-sm text-gray-600 font-sR">
                For any questions or clarifications regarding these terms, please contact us 
                through our official channels.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span className="text-gray-600 font-sR text-sm">
              Last updated: October 2025 • Effective immediately
            </span>
            <div className="w-2 h-2 bg-orange rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
