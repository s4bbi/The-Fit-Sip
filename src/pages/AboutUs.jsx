import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    if (el) {
      const heading = el.querySelector("h2");
      const paragraphs = el.querySelectorAll(".about-para");
      const cta = el.querySelector(".about-cta");
      const checklist = el.querySelectorAll(".about-check");

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

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 md:px-20 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-cgEB text-green mb-6">
          What is THE FIT SIP?
        </h2>

        {/* Paragraphs */}
        <div className="text-gray-700 font-sR space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-left">
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
            Yes, We at <span className="font-sB text-green">“The Fit Sip”</span>,
            bring{" "}
            <span className="font-sB text-orange">
              Fresh Juices, Shots, Smoothies, Fruits & Salad Bowls, Oats Jars
            </span>{" "}
            and more with{" "}
            <span className="font-sB text-orange">No Sugar & Preservatives</span>{" "}
            right to your doorstep every morning, so you can feel energized and
            guilt-free all day long.
          </p>
          <p className="about-para">
            And here’s the best part — Our{" "}
            <span className="font-sB text-green">Weekly Plan</span> starts at
            just <span className="font-sB">Rs. 400</span> per week with{" "}
            <span className="font-sB">Free Delivery Every Morning!</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <h3 className="text-xl font-cgEB text-gray-900 mb-3">
            Join Us / Order
          </h3>
          <a
            href="https://wa.link/24skdz"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta inline-block bg-green hover:bg-green-700 text-white font-sB px-6 py-3 rounded-full shadow-md transition"
          >
            CLICK HERE TO KNOW MORE or ORDER
          </a>
        </div>

        {/* Why The Fit Sip */}
        <div className="mt-10 text-left">
          <h3 className="text-lg md:text-xl font-cgEB text-green mb-4">
            Why The Fit Sip?
          </h3>
          <ul className="space-y-3 text-gray-700 font-sR text-sm sm:text-base">
            {[
              "100% Fresh & Pure",
              "Healthy, Natural & Raw",
              "Hassle-Free Subscriptions",
              "Free Delivery, Every Morning",
              "No Added Sugar",
              "No Preservatives",
            ].map((point, idx) => (
              <li key={idx} className="about-check flex items-center gap-2">
                <FaCheckCircle className="text-green w-5 h-5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
