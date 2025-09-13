import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation added
import { FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import logo from "../../assets/fitsip-logo.svg";
import PrimaryButton from "./CommonButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const location = useLocation(); // ✅ track route changes

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // GSAP intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-header",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu height toggle
  useEffect(() => {
    const el = menuRef.current;
    if (el) el.style.height = menuOpen ? el.scrollHeight + "px" : "0px";
  }, [menuOpen]);

  // GSAP animation for hamburger toggle
  useEffect(() => {
    if (!hamburgerRef.current) return;

    const topLine = hamburgerRef.current.querySelector(".line1");
    const middleLine = hamburgerRef.current.querySelector(".line2");
    const bottomLine = hamburgerRef.current.querySelector(".line3");

    if (menuOpen) {
      gsap.to(topLine, { rotation: 45, y: 6, duration: 0.3, transformOrigin: "center" });
      gsap.to(middleLine, { opacity: 0, duration: 0.3 });
      gsap.to(bottomLine, { rotation: -45, y: -6, duration: 0.3, transformOrigin: "center" });
    } else {
      gsap.to(topLine, { rotation: 0, y: 0, duration: 0.3, transformOrigin: "center" });
      gsap.to(middleLine, { opacity: 1, duration: 0.3 });
      gsap.to(bottomLine, { rotation: 0, y: 0, duration: 0.3, transformOrigin: "center" });
    }
  }, [menuOpen]);

  // Smooth scroll for Products
  const handleProductsClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.location.href = "/#offerings";
    } else {
      const offeringsSection = document.getElementById("offerings");
      if (offeringsSection) {
        offeringsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header ref={headerRef} className="w-full bg-white shadow-md font-sM">
      {/* Top Announcement Bar */}
      <div className="animate-header w-full bg-green text-white text-sm sm:text-base font-sR text-center py-2 px-4">
        🚚 Free delivery before <span className="font-sB">8 AM</span> across Gurgaon · Call / WhatsApp us at{" "}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1"
        >
          +91 98765 43210
        </a>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between h-16 px-6 md:px-14 lg:px-20 font-sB ">
        {/* Logo */}
        <Link to="/" className="animate-header flex items-center">
          <img src={logo} alt="FitSip Logo" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex -mr-14 items-center space-x-8 text-black animate-header h-full">
          <Link to="/" className="flex items-center hover:text-green-500 transition">
            HOME
          </Link>
          <a
            href="#offerings"
            onClick={handleProductsClick}
            className="flex items-center hover:text-green-500 transition cursor-pointer"
          >
            PRODUCTS
          </a>
          <Link to="/weekly-plans" className="flex items-center hover:text-green-500 transition">
            PLANS
          </Link>
          <Link to="/contact" className="flex items-center hover:text-green-500 transition">
            CONTACT US
          </Link>
        </nav>

        {/* Desktop Chat Button */}
        <div className="hidden md:flex items-center animate-header">
          <PrimaryButton href="https://wa.me/919876543210" text="CHAT NOW" />
        </div>

        {/* Hamburger for Mobile */}
        <button
          ref={hamburgerRef}
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 text-green-800 focus:outline-none animate-header"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="line1 block w-6 h-0.5 bg-current rounded"></span>
          <span className="line2 block w-6 h-0.5 bg-current rounded"></span>
          <span className="line3 block w-6 h-0.5 bg-current rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-white border-t transition-height duration-300 ease-in-out"
        style={{ height: "0px" }}
      >
        <nav className="flex flex-col space-y-2 p-4 text-black">
          <Link to="/" className="hover:text-green-500 transition">HOME</Link>
          <a
            href="#offerings"
            onClick={handleProductsClick}
            className="hover:text-green-500 transition cursor-pointer"
          >
            PRODUCTS
          </a>
          <Link to="/weekly-plans" className="hover:text-green-500 transition">PLANS</Link>
          <Link to="/contact" className="hover:text-green-500 transition">CONTACT US</Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition mt-2 text-center flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="h-5 w-5" />
            CHAT NOW
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
