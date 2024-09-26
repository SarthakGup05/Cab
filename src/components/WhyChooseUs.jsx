import React, { useEffect } from 'react';
import { FaClock, FaUserTie, FaCalendarCheck, FaMoneyBillWave, FaCar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 120, // Trigger point for the animation
    });
  }, []);

  const reasons = [
    {
      title: '24/7 Availability',
      description: 'Our taxi rental service is available round the clock to cater to your transportation needs.',
      icon: <FaClock />,
      animation: 'animate-fade-in-left'
    },
    {
      title: 'Experienced Drivers',
      description: 'Our drivers are highly experienced, ensuring safe and comfortable journeys for our customers.',
      icon: <FaUserTie />,
      animation: 'animate-fade-in-up'
    },
    {
      title: 'Easy Booking Process',
      description: 'Booking a taxi with us is quick and hassle-free, giving you peace of mind for your travels.',
      icon: <FaCalendarCheck />,
      animation: 'animate-fade-in-right'
    },
    // {
    //   title: 'Competitive Pricing',
    //   description: 'We offer affordable rates for our taxi services without compromising on quality or reliability.',
    //   icon: <FaMoneyBillWave />,
    //   animation: 'animate-fade-in-left'
    // },
    // {
    //   title: 'Modern Fleet',
    //   description: 'Our taxi fleet consists of modern vehicles equipped with the latest amenities for your comfort.',
    //   icon: <FaCar />,
    //   animation: 'animate-fade-in-up'
    // }
  ];


  return (
    <>
        <div className="bg-theme-color-base p-8 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-center"><span className="text-[#86ab89] text-5xl">Why</span> <span className="text-theme-color-secondary-content text-black" >Choose Us ?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className={` bg-[#86ab89] p-6 rounded-lg shadow-md ${reason.animation} flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105`}
          >
            <div className="text-4xl text-black mb-4">{reason.icon}</div>
            <h3 className="text-xl font-bold mb-2  text-[#000000]">{reason.title}</h3>
            <p className="text-theme-color-primary-contentv font-semibold  text-[#030303]">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WhyChooseUs;
