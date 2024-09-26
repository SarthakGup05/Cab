import React from 'react'
import { motion } from "framer-motion";
import {FaExclamationCircle} from 'react-icons/fa'

const Notification = () => {
  return (
    <div className="w-full sm:max-w-full h-20 rounded-lg  flex items-center justify-center relative  shadow-lg mx-auto overflow-hidden px-4 bg-[#86ab89]">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-center sm:text-left text-gray-800 font-semibold text-sm sm:text-base lg:text-xl">
      <FaExclamationCircle className="inline-block text-white mr-2 font-poppins font-medium" />
      For local travel within Lucknow,{" "}
      <span className="text-[#f5f5f5]">charges</span> are{" "}
      <span className="text-[#f5f5f5]">₹2,200</span>{" "}
      <span className="font-semibold text-black">for 8 hours</span>
    </div>
  </motion.div>
</div> 
  )
}

export default Notification