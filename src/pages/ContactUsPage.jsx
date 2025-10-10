// src/pages/ContactPage.jsx
import React, { useEffect, useRef } from "react";
import { Title, Meta, Link as MetaLink } from "react-head"; // ✅ SEO with react-head
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUsers,
  FaLeaf,
  FaHandshake,
  FaComments
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl text-green" />,
      title: "WhatsApp Chat",
      description: "Quick orders & instant support",
      contact: "Chat on WhatsApp",
      href: "https://wa.me/9036024955",
      highlight: true
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-blue-600" />,
      title: "Phone Support",
      description: "Speak with our team directly",
      contact: "+91 90360 24955",
      href: "tel:+919036024955"
    },
    {
      icon: <FaEnvelope className="text-2xl text-orange-500" />,
      title: "Email Support",
      description: "Detailed queries & feedback",
      contact: "thefitsip.india@gmail.com",
      href: "mailto:thefitsip.india@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-500" />,
      title: "Visit Us",
      description: "Our service area location",
      contact: "Sector 79, Gurgaon",
      href: "#location"
    }
  ];

  const quickFacts = [
    {
      icon: <FaClock className="text-green text-xl" />,
      title: "Delivery Hours",
      value: "7:00 AM - 8:30 AM",
      subtitle: "Fresh every morning"
    },
    {
      icon: <FaUsers className="text-blue-600 text-xl" />,
      title: "Daily Subscribers",
      value: "2000+",
      subtitle: "Happy customers"
    },
    {
      icon: <FaLeaf className="text-orange-500 text-xl" />,
      title: "Products",
      value: "100% Natural",
      subtitle: "No preservatives"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate hero section
      gsap.fromTo(
        ".hero-content",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate contact cards
      gsap.fromTo(
        ".contact-card",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate quick facts
      gsap.fromTo(
        ".fact-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".facts-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-20 py-16 min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip - Fresh Juices in Gurgaon | Contact Us</Title>
      <Meta
        name="description"
        content="Get in touch with The Fit Sip - fresh juices, smoothies, salads & healthy meals delivered before 8 AM in Gurgaon. Call, WhatsApp, or email us today."
      />
      <Meta
        name="keywords"
        content="contact The Fit Sip, juice delivery Gurgaon, smoothie delivery Gurgaon, health food Gurgaon, WhatsApp juice order Gurgaon"
      />
      <Meta property="og:title" content="Contact The Fit Sip" />
      <Meta
        property="og:description"
        content="Reach out to The Fit Sip team for fresh juices & healthy meals in Gurgaon. Available on call, WhatsApp, and email."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.in/contact" />
      <MetaLink rel="canonical" href="https://thefitsip.in/contact" />

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="hero-content text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cgEB text-gray-900 mb-4">
            Get In <span className="text-green">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-sR leading-relaxed">
            Ready to start your healthy journey? We'd love to hear from you! 
            Reach out through any of the methods below and our team will get back to you promptly.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <div
              key={idx}
              className={`contact-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border text-center group hover:scale-105 ${
                method.highlight 
                  ? 'border-green/30 bg-gradient-to-br from-green/5 to-green/10' 
                  : 'border-gray-100'
              }`}
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-cgEB text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 font-sR mb-4">
                  {method.description}
                </p>
              </div>
              
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-sB transition-all duration-300 ${
                  method.highlight 
                    ? 'bg-green text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>

        {/* Quick Facts Section */}
        <div className="facts-section bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-4">
              Why Choose <span className="text-green">The Fit Sip</span>?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="fact-card text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-cgEB text-gray-900 mb-1">
                  {fact.title}
                </h3>
                <div className="text-2xl font-bold text-green mb-1">
                  {fact.value}
                </div>
                <p className="text-sm text-gray-600 font-sR">
                  {fact.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-gradient-to-r from-green/5 to-blue/5 rounded-3xl p-8 md:p-12 border border-green/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-cgEB text-gray-900 mb-6">
                Ready to Start Your <span className="text-green">Healthy Journey</span>?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FaMapMarkerAlt className="text-green flex-shrink-0" />
                  <div>
                    <div className="font-sB text-gray-800">Service Area</div>
                    <div className="text-gray-600 font-sR">Sector 79, Gurgaon, Haryana 122101</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FaClock className="text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-sB text-gray-800">Delivery Hours</div>
                    <div className="text-gray-600 font-sR">Every morning between 7:00 AM - 8:30 AM</div>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/9036024955"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green text-white px-8 py-4 rounded-full font-sB hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <FaWhatsapp className="text-xl" />
                Start Your Order Now
              </a>
            </div>

            {/* Right side - Additional Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <FaHandshake className="text-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-cgEB text-gray-900 mb-2">Customer Support</h3>
                    <p className="text-gray-700 font-sR text-sm leading-relaxed">
                      Our team is available to help you choose the perfect weekly plan 
                      and answer all your health and nutrition questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <FaComments className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-cgEB text-gray-900 mb-2">Quick Response</h3>
                    <p className="text-gray-700 font-sR text-sm leading-relaxed">
                      We typically respond to WhatsApp messages within minutes and 
                      emails within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <div className="mb-6">
            <h3 className="text-xl font-cgEB text-gray-900 mb-2">
              <span className="text-green">Wellory Living Pvt. Ltd.</span>
            </h3>
            <p className="text-gray-600 font-sR">
              Committed to bringing fresh, healthy nutrition to your doorstep every morning
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green rounded-full"></div>
              <span>FSSAI: 20824005004774</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>GST: 06AAECW1197M1ZV</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Serving Gurgaon since establishment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
