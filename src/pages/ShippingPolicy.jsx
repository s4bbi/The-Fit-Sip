import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaTruck, 
  FaClock, 
  FaMapMarkerAlt, 
  FaRecycle, 
  FaPhoneAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCalendarAlt
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ShippingPolicy = () => {
  const ref = useRef(null);

  const sections = [
    {
      title: "Delivery Schedule",
      icon: <FaClock className="text-blue-600 text-xl" />,
      content: [
        "Daily delivery time: 7:00 AM – 8:30 AM (Monday to Sunday)",
        "Fresh products prepared the same morning for maximum quality",
        "Consistent delivery schedule to maintain your routine",
        "Weekend deliveries included in all subscription plans",
        "Holiday schedule communicated in advance"
      ]
    },
    {
      title: "Service Coverage",
      icon: <FaMapMarkerAlt className="text-green text-xl" />,
      content: [
        "Currently serving all areas of Gurgaon (Gurugram)",
        "Free delivery to your doorstep within our service areas",
        "Apartment complexes, independent houses, and office deliveries",
        "No minimum order value required for delivery",
        "Expanding to nearby areas - check availability for new locations"
      ]
    },
    {
      title: "Bottle Return Policy",
      icon: <FaRecycle className="text-orange-500 text-xl" />,
      content: [
        "All bottles and jars must be returned the next day",
        "Clean, empty containers help us maintain sustainability",
        "Return bottles to our delivery person during next delivery",
        "Deposit may apply for unreturned containers",
        "Eco-friendly packaging and reusable container system"
      ]
    },
    {
      title: "Delivery Guidelines",
      icon: <FaTruck className="text-purple-600 text-xl" />,
      content: [
        "Products delivered fresh every morning at your doorstep",
        "Delivery person will ring/knock and leave products safely",
        "Specific delivery instructions can be provided during signup",
        "Temperature-controlled transportation for product freshness",
        "Contactless delivery options available upon request"
      ]
    },
    {
      title: "Missed Delivery Protocol",
      icon: <FaPhoneAlt className="text-red-500 text-xl" />,
      content: [
        "Notify us immediately on the same day if delivery is missed",
        "Call or WhatsApp us before 9:00 AM for same-day resolution",
        "We maintain accurate delivery records for billing purposes",
        "Replacement delivery can be arranged if notified promptly",
        "Communication is key to maintaining service quality"
      ]
    }
  ];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Animate section cards
      gsap.fromTo(
        ".sp-section",
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
        ".sp-item",
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
    <main ref={ref} className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16 min-h-screen">
      <Title>Shipping Policy — The Fit Sip</Title>
      <Meta name="description" content="Comprehensive shipping and delivery policy of The Fit Sip detailing delivery windows, coverage areas, and service terms." />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cgEB text-gray-900 mb-4">
            Shipping & Delivery Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 font-sR max-w-3xl mx-auto leading-relaxed">
            We provide <span className="font-sB text-green">free early-morning delivery</span> to all our subscribers 
            in Gurgaon, ensuring fresh and healthy products reach your doorstep every day.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green/20 text-center">
            <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-green text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-600 font-sR">On all subscription plans within Gurgaon</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Early Morning</h3>
            <p className="text-sm text-gray-600 font-sR">Daily delivery between 7:00 AM - 8:30 AM</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-orange-500 text-xl" />
            </div>
            <h3 className="font-cgEB text-gray-900 mb-2">Fresh Daily</h3>
            <p className="text-sm text-gray-600 font-sR">Made fresh every morning for optimal quality</p>
          </div>
        </div>

        {/* Delivery Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="sp-section bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
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
                  <li key={itemIdx} className="sp-item flex items-start gap-3 text-gray-700 font-sR leading-relaxed">
                    <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="flex-1">{item}</span>
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
              <h3 className="text-xl font-cgEB text-gray-900 mb-3">Important Delivery Notes</h3>
              <div className="space-y-3 text-gray-700 font-sR">
                <p className="leading-relaxed">
                  <span className="font-sB">Same-day notification required:</span> If you don't receive your delivery, 
                  please inform us immediately on the same day to keep our records accurate and ensure proper billing.
                </p>
                <p className="leading-relaxed">
                  <span className="font-sB">Container returns:</span> All bottles and jars must be returned the next day 
                  to maintain our sustainable packaging system and ensure continued service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-gradient-to-r from-green/10 to-blue/10 rounded-2xl p-8 border-l-4 border-green">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-green text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-cgEB text-gray-900 mb-3">Delivery Support</h3>
              <p className="text-gray-700 font-sR leading-relaxed mb-4">
                For any delivery-related queries, missed deliveries, or special instructions, 
                please contact us immediately. Our team is available to ensure seamless service.
              </p>
              <div className="bg-white p-4 rounded-lg border border-green/30">
                <a href="https://wa.link/24skdz" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-green font-sB hover:text-green-700 transition-colors">
                  <FaPhoneAlt className="text-sm" />
                  Contact Us via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Notice */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaMapMarkerAlt className="text-green text-xl" />
              <h3 className="text-lg font-cgEB text-gray-900">Service Coverage</h3>
            </div>
            <p className="text-gray-700 font-sR mb-4">
              Currently serving <span className="font-sB text-green">Gurgaon (Gurugram)</span> with plans to expand. 
              Check availability for your area during signup.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span className="text-gray-600 font-sR text-sm">
              Reliable delivery service since establishment • Updated October 2025
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShippingPolicy;
