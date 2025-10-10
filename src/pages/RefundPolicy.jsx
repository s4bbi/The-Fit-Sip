import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaUndo, 
  FaExclamationTriangle, 
  FaClipboardCheck, 
  FaCreditCard,
  FaClock,
  FaPhone,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RefundPolicy = () => {
  const ref = useRef(null);

  const sections = [
    {
      title: "Order Cancellation Policy",
      icon: <FaTimesCircle className="text-red-500 text-xl" />,
      content: [
        "Cancellations are only accepted on the same day of placing the order",
        "Request must be made before 10:00 PM on the day of order placement",
        "Once the preparation process begins, cancellations cannot be processed",
        "Weekly subscription cancellations require 24-hour advance notice",
        "No cancellation fees apply for requests made within the allowed timeframe"
      ]
    },
    {
      title: "Damaged or Defective Products",
      icon: <FaExclamationTriangle className="text-orange-500 text-xl" />,
      content: [
        "Report damaged or defective items to our customer service immediately",
        "Claims must be reported within 1 day of receiving the product",
        "Provide clear photos of the damaged/defective product for verification",
        "Our team will verify the complaint and determine appropriate action",
        "Replacement or refund will be processed once the claim is verified"
      ]
    },
    {
      title: "Quality Concerns",
      icon: <FaClipboardCheck className="text-blue-600 text-xl" />,
      content: [
        "If the product doesn't meet your expectations or site description",
        "Report quality issues within 6 hours of receiving the product",
        "Our customer service team will investigate your complaint thoroughly",
        "Quality-related refunds/replacements are subject to verification",
        "We maintain high standards and take all quality feedback seriously"
      ]
    },
    {
      title: "Refund Processing",
      icon: <FaCreditCard className="text-green text-xl" />,
      content: [
        "Approved refunds are processed within 3 business days",
        "Refunds are credited to the original payment method used",
        "Bank processing times may vary (2-7 business days additional)",
        "Refund confirmation and tracking details will be shared via email/SMS",
        "Partial refunds may apply for consumed portions of subscription plans"
      ]
    },
    {
      title: "Important Timelines",
      icon: <FaClock className="text-purple-600 text-xl" />,
      content: [
        "Same-day cancellation: Before 10:00 PM",
        "Damaged product reporting: Within 24 hours of delivery",
        "Quality issue reporting: Within 6 hours of delivery",
        "Refund processing: 3 business days after approval",
        "Customer service response: Within 24 hours of complaint"
      ]
    }
  ];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Animate section cards
      gsap.fromTo(
        ".rp-section",
        { y: 40, opacity: 0, scale: 0.98 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out", 
          scrollTrigger: { 
            trigger: ref.current, 
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      );

      // Animate content items
      gsap.fromTo(
        ".rp-item",
        { x: -20, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.08, 
          ease: "power2.out", 
          scrollTrigger: { 
            trigger: ref.current, 
            start: "top 70%" 
          } 
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={ref}
      className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16 min-h-screen"
    >
      <Title>Refund & Cancellation Policy — The Fit Sip</Title>
      <Meta
        name="description"
        content="Comprehensive refund and cancellation policy of The Fit Sip covering order cancellations, damaged products, quality issues, and refund processing timelines."
      />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cgEB text-gray-900 mb-4">
            Cancellation & Refund Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 font-sR max-w-3xl mx-auto leading-relaxed">
            We strive to provide the best quality products and service. If you're not completely satisfied, 
            here are the terms for <span className="font-sB text-green">cancellations and refunds</span>.
          </p>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 text-center">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-red-500 text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Same Day Cancellation</h3>
            <p className="text-sm text-gray-600 font-sR">Before 10:00 PM on order day</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaExclamationTriangle className="text-orange-500 text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Report Issues</h3>
            <p className="text-sm text-gray-600 font-sR">Within 6-24 hours of delivery</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green/20 text-center">
            <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCreditCard className="text-green text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Refund Processing</h3>
            <p className="text-sm text-gray-600 font-sR">Within 3 business days</p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="rp-section bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                <div className="p-3 bg-gray-50 rounded-full">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-cgEB text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <ul className="space-y-4">
                {section.content.map((item, itemIdx) => (
                  <li key={itemIdx} className="rp-item flex items-start gap-3 text-gray-700 font-sR leading-relaxed">
                    <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Guidelines */}
        <div className="mt-12 bg-gradient-to-r from-blue/10 to-green/10 rounded-2xl p-8 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <FaShieldAlt className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-cgEB text-gray-900 mb-4">Quality Assurance Guidelines</h3>
              <div className="space-y-3 text-gray-700 font-sR">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green text-sm mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-sB">Product Inspection:</span> Check your product immediately upon delivery. 
                    Look for any visible damage, unusual smell, or quality concerns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green text-sm mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-sB">Documentation:</span> Take clear photos of any issues for faster 
                    complaint resolution and verification process.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green text-sm mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <span className="font-sB">Timely Reporting:</span> Report issues within specified timeframes 
                    to ensure eligible for refund or replacement consideration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Service Contact */}
        <div className="mt-8 bg-gradient-to-r from-green/10 to-orange/10 rounded-2xl p-8 border-l-4 border-green">
          <div className="flex items-start gap-4">
            <FaPhone className="text-green text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-cgEB text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-700 font-sR leading-relaxed mb-4">
                For cancellations, refund requests, or quality concerns, contact our customer service team immediately. 
                We're committed to resolving all issues promptly and fairly.
              </p>
              <div className="bg-white p-4 rounded-lg border border-green/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaPhone className="text-green" />
                  <span className="font-sB text-gray-800">Contact Methods:</span>
                </div>
                <div className="space-y-1">
                  <a href="https://wa.link/24skdz" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block text-green font-sB hover:text-green-700 transition-colors">
                    WhatsApp Support (Preferred)
                  </a>
                  <p className="text-sm text-gray-600 font-sR">Response time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 bg-gradient-to-r from-orange/10 to-red/10 rounded-2xl p-6 border-l-4 border-orange">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="text-orange text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-cgEB text-gray-900 mb-2">Important Legal Note</h3>
              <p className="text-gray-700 font-sR text-sm leading-relaxed">
                This refund policy is subject to verification and approval by THE FIT SIP management. 
                Final decisions on refunds and replacements rest with the company. We reserve the right 
                to modify this policy with prior notice to customers.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span className="text-gray-600 font-sR text-sm">
              Customer satisfaction guaranteed • Policy updated October 2025
            </span>
            <div className="w-2 h-2 bg-orange rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
