import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactInfo = ({
  formDescription = "We are here to help! Feel free to reach out to us via the contact information below.",
  aosDuration = 800,
  width = 'max-w-5xl', // Dynamic width
  height = 'min-h-[100vh]' // Dynamic height
}) => {
  
  useEffect(() => {
    AOS.init({
      duration: aosDuration,
    });
  }, [aosDuration]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5] overflow-y-hidden">
      <div className={`flex flex-col md:flex-row w-4/5 ${width} h-3/4 sm:flex-1 bg-white rounded-md drop-shadow-2xl overflow-hidden`} data-aos="fade-up">
        {/* Left Side (Info Section) */}
        <div className="flex-1 p-8 bg-gradient-to-r from-slate-50 to-slate-100 text-black">
          <h2 className="text-4xl font-bold mb-8 text-center"><span className="text-[#86ab89] text-5xl">Contact</span> <span className="text-theme-color-secondary-content uppercase font-thin">Us</span></h2>
          <p className="text-gray-500 font-bold mb-6">{formDescription}</p>

          {/* Contact Info */}
          <div className="space-y-4 text-center">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> D-4/282 Virat Khand Gomti Nagar Lucknow
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" /> humsafarcar0270@gmail.com
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +91 9956390320
            </div>
            {/* <div className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +91 8318929133
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
