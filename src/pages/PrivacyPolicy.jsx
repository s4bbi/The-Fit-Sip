import React, { useEffect, useRef } from "react";
import { Title, Meta } from "react-head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaShieldAlt, 
  FaUserShield, 
  FaDatabase, 
  FaLock, 
  FaEnvelope, 
  FaGlobe,
  FaCookieBite,
  FaHandshake,
  FaExclamationCircle
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const ref = useRef(null);

  const sections = [
    {
      title: "Information We Collect",
      icon: <FaDatabase className="text-blue-600 text-xl" />,
      content: [
        "Personal details: Name, email, phone number, and delivery address when you sign up or place an order",
        "Communication data: Messages and information you share via contact forms, emails, or customer support",
        "Technical information: IP address, browser type, device information, and usage patterns",
        "Location data: Delivery area information for service availability",
        "Payment information: Billing details (processed securely through third-party payment gateways)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <FaUserShield className="text-green text-xl" />,
      content: [
        "Process and deliver your weekly health plan subscriptions",
        "Communicate important updates about your orders and deliveries",
        "Provide customer support and respond to your inquiries",
        "Send promotional offers and health tips (with your consent)",
        "Improve our website functionality and user experience",
        "Ensure secure payment processing and fraud prevention",
        "Comply with legal requirements and business operations"
      ]
    },
    {
      title: "Data Protection & Security",
      icon: <FaLock className="text-red-500 text-xl" />,
      content: [
        "We implement industry-standard security measures to protect your data",
        "All payment transactions are processed through secure, encrypted channels",
        "Access to personal information is limited to authorized personnel only",
        "We regularly update our security protocols to prevent data breaches",
        "Your data is stored on secure servers with backup systems",
        "We never sell or rent your personal information to third parties"
      ]
    },
    {
      title: "Cookies & Website Usage",
      icon: <FaCookieBite className="text-orange-500 text-xl" />,
      content: [
        "We use cookies to enhance your browsing experience on our website",
        "Essential cookies are required for website functionality and cannot be disabled",
        "Analytics cookies help us understand how users interact with our site",
        "You can control cookie preferences through your browser settings",
        "We may use Google Analytics for website performance monitoring"
      ]
    },
    {
      title: "Your Rights & Choices",
      icon: <FaHandshake className="text-purple-600 text-xl" />,
      content: [
        "Access and review the personal information we have about you",
        "Request correction of any inaccurate or incomplete data",
        "Request deletion of your personal information (subject to legal requirements)",
        "Opt-out of promotional communications at any time",
        "Withdraw consent for data processing where applicable",
        "Request data portability in a structured, machine-readable format"
      ]
    }
  ];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Animate section cards
      gsap.fromTo(
        ".pp-section",
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
        ".pp-item",
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
      <Title>Privacy Policy — The Fit Sip</Title>
      <Meta name="description" content="Privacy Policy of The Fit Sip explaining how we collect, use, and protect your personal data." />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cgEB text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green to-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 font-sR max-w-3xl mx-auto leading-relaxed">
            At <span className="font-sB text-green">THE FIT SIP</span>, we value your trust and privacy. 
            This policy explains how we collect, use, and protect your personal information with complete transparency.
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaShieldAlt className="text-green text-2xl" />
              <h2 className="text-2xl font-cgEB text-gray-900">Data Protection Commitment</h2>
            </div>
            <p className="text-gray-700 font-sR leading-relaxed mb-6">
              Operating under <span className="font-sB text-green">Wellory Living Pvt. Ltd.</span>, 
              we are committed to protecting your personal information and ensuring transparency in our data practices.
            </p>
            <div className="bg-gradient-to-r from-green/5 to-blue/5 p-4 rounded-lg border border-green/20">
              <p className="text-sm text-gray-600 font-sR">
                This Privacy Policy applies to all information collected through our website 
                <span className="font-sB text-green mx-1">www.thefitsip.in</span> and our service operations.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="pp-section bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
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
                  <li key={itemIdx} className="pp-item flex items-start gap-3 text-gray-700 font-sR leading-relaxed">
                    <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Data Requests Section */}
        <div className="mt-12 bg-gradient-to-r from-blue/10 to-green/10 rounded-2xl p-8 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-cgEB text-gray-900 mb-3">Contact Us About Your Privacy</h3>
              <p className="text-gray-700 font-sR leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, want to exercise your data rights, 
                or need assistance with your personal information, please don't hesitate to contact us.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <FaEnvelope className="text-blue-600" />
                  <span className="font-sB text-gray-800">Email:</span>
                </div>
                <a href="mailto:thefitsip.india@gmail.com" 
                   className="text-blue-600 font-sB hover:text-blue-700 transition-colors">
                  thefitsip.india@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-gradient-to-r from-orange/10 to-red/10 rounded-2xl p-6 border-l-4 border-orange">
          <div className="flex items-start gap-3">
            <FaExclamationCircle className="text-orange text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-cgEB text-gray-900 mb-2">Policy Updates</h3>
              <p className="text-gray-700 font-sR text-sm leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of any significant changes through our website 
                or email communication.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span className="text-gray-600 font-sR text-sm">
              Last updated: October 2025 • Effective immediately
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
