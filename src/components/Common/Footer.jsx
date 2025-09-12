import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../../assets/fitsip-logo.svg";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="The Fit Sip Logo" className="h-8 mb-2" />
          <p className="text-sm font-sR">
            © {new Date().getFullYear()} The Fit Sip. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0 text-sm font-sR">
          <Link to="/contact" className="hover:text-white transition">
            Contact Us
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
