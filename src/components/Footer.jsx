import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">About Humsafar</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted travel partner providing safe and comfortable cab services across India. Experience the journey with comfort and style.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FaArrowRight className="mr-2 text-sm" /> Home
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FaArrowRight className="mr-2 text-sm" /> About Us
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FaArrowRight className="mr-2 text-sm" /> Services
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FaArrowRight className="mr-2 text-sm" /> Book Now
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <FaArrowRight className="mr-2 text-sm" /> Contact
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-xl" /> 
                <span>D-4/282 Virat Khand Gomti Nagar Lucknow</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <FaEnvelope className="mr-3 text-xl" /> 
                <span>humsafarcar0270@gmail.com</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <FaPhoneAlt className="mr-3 text-xl" /> 
                <span>+91 9956390320</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <FaPhoneAlt className="mr-3 text-xl" /> 
                <span>+91 8318929133</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Humsafar Cabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
