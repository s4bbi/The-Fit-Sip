// src/pages/ContactPage.jsx
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "h1, p, .info-box, iframe",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
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
    <section ref={sectionRef} className="bg-[#FBFBF4] px-6 md:px-20 py-16">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip - Fresh Juices in Gurgaon | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with The Fit Sip - fresh juices, smoothies, salads & healthy meals delivered before 8 AM in Gurgaon. Call, WhatsApp, or email us today."
        />
        <meta
          name="keywords"
          content="contact The Fit Sip, juice delivery Gurgaon, smoothie delivery Gurgaon, health food Gurgaon, WhatsApp juice order Gurgaon"
        />
        <meta property="og:title" content="Contact The Fit Sip" />
        <meta
          property="og:description"
          content="Reach out to The Fit Sip team for fresh juices & healthy meals in Gurgaon. Available on call, WhatsApp, and email."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/contact" />
      </Helmet>

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-cgEB text-gray-900 mb-4">
          Contact <span className="text-green">Us</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto font-sR">
          We’d love to hear from you! Get in touch with us through the details
          below or find us on the map.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center mb-12">
        <div className="info-box flex items-center gap-3">
          <FaMapMarkerAlt className="text-green w-6 h-6" />
          <p className="text-gray-800 font-sM">123 FitSip Street, Gurgaon</p>
        </div>
        <div className="info-box flex items-center gap-3">
          <FaPhoneAlt className="text-green w-6 h-6" />
          <p className="text-gray-800 font-sM">+91 98765 43210</p>
        </div>
        <div className="info-box flex items-center gap-3">
          <FaEnvelope className="text-green w-6 h-6" />
          <p className="text-gray-800 font-sM">support@fitsip.com</p>
        </div>
        <div className="info-box flex items-center gap-3">
          <FaWhatsapp className="text-green w-6 h-6" />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-sM hover:text-green"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-72">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.387152418246!2d77.03687001508372!3d28.459496982486606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c4d3f20c3b%3A0x4f5c2b0a7d8baf91!2sGurgaon!5e0!3m2!1sen!2sin!4v1632486789012!5m2!1sen!2sin"
          className="w-full h-full rounded-2xl border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
