import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyChooseHumsafarCabs = () => {
  const image = '/assets/why humsafer.jpg'; // Replace with your actual image path

  return (
    <div className="bg-[#ffffff] py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side image content */}
        <motion.div
          className="flex justify-center md:justify-end h-full"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <img
            src={image}
            alt="Humsafar Cabs"
            className="rounded-lg shadow-lg w-full h-full object-cover"
            style={{ height: 'auto', maxHeight: '500px' }}
          />
        </motion.div>

        {/* Right side text content */}
        <motion.div
          className="p-6 bg-[#86ab89] font-light flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-bold text-[#000000] mb-4">
            Why Choose Humsafar Cabs?
          </h2>
          <p className="text-lg font-poppins text-white mb-4">
            Welcome to Humsafar Cab Service - Travels and Taxi Services, your
            trusted provider of reliable, professional, and efficient taxi
            services in Lucknow. We are committed to offering easy accessibility
            and exceptional transportation solutions to meet all your travel
            needs.
          </p>
          <p className="text-lg font-poppins text-white mb-4">
            Whether you require airport transfers, city tours, or point-to-point
            trips, Humsafar Cab Service ensures a seamless travel experience
            every time. Our fleet of modern vehicles and team of experienced
            drivers guarantee comfort, safety, and punctuality, making us the
            preferred choice for both personal and corporate travel.
          </p>
          <p className="text-lg font-poppins text-white">
            Choose Humsafar Cab Service for your next journey and experience the
            convenience and excellence that sets us apart in the transportation
            industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseHumsafarCabs;
