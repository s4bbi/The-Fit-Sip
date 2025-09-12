// src/components/Common/PrimaryButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const PrimaryButton = ({ href, text, icon = true, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 
                  px-6 py-2 rounded-full font-sB text-sm sm:text-base
                  bg-green text-white hover:bg-green-600 transition
                  leading-none align-middle ${className}`}
    >
      {icon && <FaWhatsapp className="w-5 h-5" />}
      {text}
    </a>
  );
};

export default PrimaryButton;
