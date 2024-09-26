import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing relevant icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Address Section */}
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h3 className="text-lg font-semibold text-white">Our Address</h3>
          <p className="text-gray-400 flex items-center justify-center sm:justify-start">
            <FaMapMarkerAlt className="mr-2" /> D-4/282 Virat Khand Gomti Nagar Lucknow
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-gray-400 flex items-center justify-center sm:justify-start">
            <FaEnvelope className="mr-2" /> humsafarcar0270@gmail.com
          </p>
        </div>

        {/* Phone Section */}
        <div className="flex flex-col items-center sm:items-start space-y-2">
          <h3 className="text-lg font-semibold text-white">Call Us</h3>
          <p className="text-gray-400 flex items-center justify-center sm:justify-start">
            <FaPhoneAlt className="mr-2" /> +91 7266040593
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; 2024 Humsafar Cabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
