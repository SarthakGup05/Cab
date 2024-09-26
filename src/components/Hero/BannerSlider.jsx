import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import BookingForm from '../BookingForm'; // Assuming you have a BookingForm component

const HeroSection = () => {
  return (
    <div
      className="
        relative py-8 min-h-screen flex flex-col 
        bg-[#000000] bg-cover bg-center lg:bg-right"  // Default center for small screens, right for large
      style={{ backgroundImage: `url('assets/girl cab.jpg')` }} // Background image as a hero section
    >
      <Toaster /> {/* React Hot Toast container */}
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Side: Form */}
        <motion.div
          className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-lg bg-white bg-opacity-80 p-6 rounded-lg" // Adjust the width of the form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <BookingForm />
        </motion.div>

        {/* Right Side: Empty div to keep grid structure */}
        <motion.div
          className="hidden lg:block" // Remove the background image div, as it's applied globally now
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Empty for grid alignment */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
