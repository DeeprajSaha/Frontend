import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5 py-8 text-center">
        {/* Logo */}
        <h2 className="text-3xl font-bold text-lime-400">
          SkyMart
        </h2>

        {/* Copyright */}
        <p className="mt-3 text-gray-500 text-sm">
          © 2025 SkyMart
        </p>
      </div>
    </footer>
  );
};

export default Footer;