import React from "react";

import WhyChooseUs from "./components/WhyChooseUs";
import CarsWeProvide from "./components/CarsWeProvide";
import ContactForm from './components/ContactForm';
import HeroSection from "./components/Hero/BannerSlider";
import WhyChooseHumsafarCabs from "./components/WhyChooseHumsafarCabs";
import Notification from "./components/Notification";
import BookingForm from "./components/BookingForm";
import HumsafarCabServices from "./components/HumsafarCabServices";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseHumsafarCabs/>
      <CarsWeProvide BookingForm={BookingForm} />
      <HumsafarCabServices/>
      <Notification/>
      <WhyChooseUs />
      <ContactForm/>
      
    
    </>
  );
};

export default Home;
