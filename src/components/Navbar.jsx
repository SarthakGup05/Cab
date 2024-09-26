import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`w-full bg-white text-black z-10 shadow-md transition-all duration-300 ${
        isSticky ? "sticky top-0 shadow-lg" : "relative"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-serif font-semibold flex items-center space-x-2">
          <FaCar className="text-3xl" /> {/* Car Icon */}
          <span>
            HUMSAFAR <span className="text-[#86ab89]">CABS</span>
          </span>
        </Link>

        {/* Right Side (Social Media + Contact + Hamburger) */}
        <div className="flex items-center space-x-6">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/7266040593"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-primary"
          >
            <FaWhatsapp className="text-green-500" />
            <span>7266040593</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
