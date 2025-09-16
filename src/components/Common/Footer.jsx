import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // ✅ Import icons
import logo from "../../assets/fitsip-logo.svg";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-screen mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-14">
        
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="The Fit Sip Logo" className="h-8 mb-2" />
          <p className="text-sm font-sR">
            © {new Date().getFullYear()} The Fit Sip. All rights reserved.
          </p>
        </div>

        {/* Links + Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 text-sm font-sR">
          {/* Internal Links */}
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/the_fit_sip?igsh=MW9peXlxbHRwanJxNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-fit-sip/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
