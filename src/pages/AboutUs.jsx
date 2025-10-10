import React, { useEffect, useRef } from "react";
import { FaCheckCircle, FaLeaf, FaHeart, FaCrown, FaShieldAlt, FaCertificate } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    if (el) {
      const heading = el.querySelector("h2");
      const subheading = el.querySelector(".company-badge");
      const paragraphs = el.querySelectorAll(".about-para");
      const cta = el.querySelector(".about-cta");
      const checklist = el.querySelectorAll(".about-check");
      const featureCards = el.querySelectorAll(".feature-card");

      // Company badge animation
      gsap.fromTo(
        subheading,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: subheading,
            start: "top 80%",
          },
        }
      );

      // Heading animation
      gsap.fromTo(
        heading,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );

      // Paragraphs stagger
      gsap.fromTo(
        paragraphs,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphs[0],
            start: "top 85%",
          },
        }
      );

      // Feature cards stagger
      gsap.fromTo(
        featureCards,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featureCards[0],
            start: "top 85%",
          },
        }
      );

      // CTA button
      gsap.fromTo(
        cta,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
          },
        }
      );

      // Checklist stagger
      gsap.fromTo(
        checklist,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: checklist[0],
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  const features = [
    {
      icon: <FaLeaf className="text-2xl text-green" />,
      title: "100% Natural",
      description: "Pure ingredients with no artificial additives"
    },
    {
      icon: <FaHeart className="text-2xl text-red-500" />,
      title: "Health Focused",
      description: "Designed for your wellness and vitality"
    },
    {
      icon: <FaCrown className="text-2xl text-yellow-500" />,
      title: "Premium Quality",
      description: "Only the finest ingredients and preparation"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-blue-500" />,
      title: "Fresh Daily",
      description: "Made fresh and delivered every morning"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Company Badge - Highlighted */}
        <div className="text-center mb-8">
          <div className="company-badge inline-flex items-center gap-2 bg-green text-white px-6 py-3 rounded-full shadow-lg border-2 border-green/20">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-cgEB text-sm md:text-base">
              A Product of <span className="font-bold">Wellory Living Pvt. Ltd.</span>
            </span>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          
          {/* FSSAI Certificate */}
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm">
              <FaCertificate className="text-blue-600" />
              <span className="font-sB text-sm">
                FSSAI Licensed: <span className="font-sB">20824005004774</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-cgEB text-gray-900 mb-4">
              What is <span className="text-green">THE FIT SIP</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="text-gray-700 font-sR space-y-5 text-base md:text-lg leading-relaxed">
                <p className="about-para">
                  Most of us want a healthy and refreshing start to the day. Something
                  that boosts energy and metabolism, aids digestion, improves health,
                  and counters the effects of bad eating habits.
                </p>
                <p className="about-para">
                  But, is there any option available early morning with top quality, at
                  your doorstep with a perfect price?
                </p>
                <p className="about-para">
                  Yes, We at <span className="font-sB text-green bg-green/10 px-2 py-1 rounded">"The Fit Sip"</span>,
                  bring{" "}
                  <span className="font-sB text-orange bg-orange/10 px-2 py-1 rounded">
                    Fresh Juices, Shots, Smoothies, Fruits & Salad Bowls, Oats Jars
                  </span>{" "}
                  and more with{" "}
                  <span className="font-sB text-red-600 bg-red-50 px-2 py-1 rounded">No Sugar & Preservatives</span>{" "}
                  right to your doorstep every morning, so you can feel energized and
                  guilt-free all day long.
                </p>
                <div className="about-para bg-gradient-to-r from-green/5 to-orange/5 p-4 rounded-xl border-l-4 border-green">
                  <p className="text-lg">
                    And here's the best part — Our{" "}
                    <span className="font-sB text-green">Weekly Plan</span> starts at
                    just <span className="font-sB text-2xl text-orange">₹400</span> per week with{" "}
                    <span className="font-sB text-green">Free Delivery Every Morning!</span>
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center lg:text-left mt-8">
                <h3 className="text-xl font-cgEB text-gray-900 mb-4">
                  Ready to Transform Your Mornings?
                </h3>
                <a
                  href="https://wa.link/24skdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-cta inline-flex items-center gap-3 bg-green hover:from-green-600 hover:to-green-700 text-white font-sB px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>ORDER NOW & GET STARTED</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </a>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group hover:scale-105"
                >
                  <div className="mb-4 p-3 bg-white rounded-full w-fit mx-auto shadow-sm group-hover:shadow-md transition-shadow">
                    {feature.icon}
                  </div>
                  <h4 className="font-cgEB text-gray-900 mb-2 text-sm md:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm font-sR">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gradient-to-br from-green/5 to-orange/5 rounded-3xl p-8 md:p-12 border border-green/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
              Why Choose <span className="text-green">The Fit Sip</span>?
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "100% Fresh & Pure", icon: "🌿" },
              { text: "Healthy, Natural & Raw", icon: "🥗" },
              { text: "Hassle-Free Subscriptions", icon: "📱" },
              { text: "Free Delivery, Every Morning", icon: "🚚" },
              { text: "No Added Sugar", icon: "🚫" },
              { text: "No Preservatives", icon: "✨" }
            ].map((point, idx) => (
              <div key={idx} className="about-check group">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-green/30">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center shadow-md">
                      <FaCheckCircle className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xl">{point.icon}</span>
                    <span className="font-sB text-gray-800 text-sm md:text-base group-hover:text-green transition-colors">
                      {point.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Credentials Footer */}
        <div className="mt-12 text-center space-y-4">
          {/* FSSAI License Display */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-2xl shadow-sm border border-blue-200">
            <FaCertificate className="text-blue-600 text-xl" />
            <div className="text-left">
              <div className="text-blue-800 font-sB text-sm">FSSAI Licensed Food Business</div>
              <div className="text-blue-600 font-mono text-lg font-bold">20824005004774</div>
            </div>
          </div>

          {/* Establishment Info */}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span className="text-gray-600 font-sR text-sm">
              Proudly serving fresh health with certified quality standards
            </span>
            <div className="w-2 h-2 bg-orange rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
