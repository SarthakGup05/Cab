import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // Import AOS styles

const HumsafarCabServices = () => {
  const image = '/assets/services.jpg'; // Replace with your actual image path

  return (
    <div className="bg-[#ffffff] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch overflow-y-hidden">
        {/* Left side image content */}
        <motion.div
          className="flex justify-center md:justify-start h-full"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <img
            src={image}
            alt="Humsafar Cabs"
            className="rounded-lg shadow-lg w-full object-cover self-stretch"
          />
        </motion.div>

        {/* Right side text content */}
        <motion.div
          className="flex flex-col p-6 bg-[#f9f9f9] font-light justify-between"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="800"
        >
          <div>
            <h2 className="text-4xl font-semibold text-[#333333] mb-6">
               Humsafar Cab Services
            </h2>
            <p className="text-lg font-poppins text-[#555555] mb-6">
              Humsafar Cabs offers reliable and professional transportation services that 
              cater to all your travel needs, whether it's a long-distance trip or a quick 
              airport ride. 
            </p>
          </div>
          <div>
            <ul className="text-lg font-poppins text-[#555555] list-disc ml-6 mb-6 font-light">
             <b><li>Outstation Cabs: {`Round trip services, multiple stops, and more.`}</li></b> 
             <br />
              <b> <li>One-Way Cab: {`Affordable one-way fares with all taxes included.`}</li></b>
              <br />
              <b> <li>Local Car Rental: {`Hourly rentals for shopping, sightseeing, and business.`}</li></b>
              <br />
               <b><li>Airport Taxi: {`Hassle-free trips to and from the airport.`}</li></b>
            </ul>
            <p className="text-lg font-poppins text-[#555555]">
              Experience safe and comfortable rides, no matter your destination. Choose Humsafar Cabs 
              for a smooth journey with transparent pricing and professional drivers.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HumsafarCabServices;
