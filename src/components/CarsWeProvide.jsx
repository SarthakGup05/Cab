import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import { FaSearch } from 'react-icons/fa'; // Import Font Awesome Icon
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; // Import AOS animation library
import { Dialog } from '@headlessui/react'; // Using Headless UI for the modal

const CarsWeProvide = ({ BookingForm }) => {
  const [isOpen, setIsOpen] = useState(false); // Modal state

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      offset: 120,    // Trigger point for the animation
    });
  }, []);

  const vehicles = [
    { name: 'Etios', price: 'Starts from ₹12/kmpl', image: '/assets/etios.png' },
    { name: 'Honda City', price: 'Starts from ₹15/kmpl', image: '/assets/hondacity.png' },
    { name: 'Crysta', price: 'Starts from ₹17/kmpl', image: '/assets/crysta.png' },
    { name: 'Kia carnnes', price: 'Starts from ₹14/kmpl', image: '/assets/kia.png' },
    { name: '26 seater Tempo Traveller', price: 'Starts from ₹33/kmpl', image: '/assets/travller.png' },
    { name: '17 seater Tempo Traveller', price: 'Starts from ₹30/kmpl', image: '/assets/travller.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12 overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Heading */}
      <h2 
        className="text-center text-4xl font-bold mb-8 relative z-10"
        data-aos="fade-up"
      >
        <span className="relative inline-block">
          <span className="bg-[#000000] text-transparent bg-clip-text">
            <span className='text-[#86ab89] text-4xl'>Vehicles</span> <span className='text-black'>We Provide</span>  
          </span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#86ab89] transform scale-x-0 origin-left transition-transform duration-500"></span>
        </span>
      </h2>

      {/* Slider */}
      <Slider {...settings} className="px-6" data-aos="fade-up">
        {vehicles.map((vehicle, index) => (
          <div key={vehicle.name} className="p-4">
            <div 
              className="relative bg-[#86ab89] text-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-2xl" // Updated background color
              data-aos="zoom-in" data-aos-delay={`${index * 100}`}
            >
              {/* Vehicle Image */}
              <img 
                className="w-full h-40 object-contain mb-4 rounded-t-md" 
                src={vehicle.image} 
                alt={vehicle.name} 
              />

              {/* Actual Title and Price */}
              <div className="p-4 relative">
                <h3 className="text-xl font-bold z-10 text-[#070303ee]">{vehicle.name}</h3>
                <p className="text-[#070303ee] font-semibold">{vehicle.price}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover Content (Title, Price, and Button) */}
              <div className="absolute bottom-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="text-xl font-bold mb-1 text-[#f5f5f5]">{vehicle.name}</h3>
                <p className="text-lg font-medium mb-4 text-[#ffffff]">{vehicle.price}</p>

                {/* Book Now Button on Hover */}
                <div className="flex justify-center">
                  <button
                    className="bg-[#86ab89] text-[#070303ee] hover:bg-green-300 duration-300 py-2 px-6 rounded-full font-bold flex items-center gap-2"
                    onClick={() => setIsOpen(true)}
                  >
                    <FaSearch className="text-black" /> {/* Icon inside the button */}
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-3 right-3 text-gray-500 text-2xl"
            >
              &times;
            </button>
            {/* Render the booking form here */}
            <BookingForm/>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CarsWeProvide;
