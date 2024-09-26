import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import Navbar from "./components/Navbar";
import PhonenumIcon from "./components/PhonenumIcon";
import Home from "./Home";

const App = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in",
      duration: 800,
    });
    Aos.refresh(); // Call refresh as a function
  }, []);

  return (
    <HelmetProvider> {/* Wrap your app with HelmetProvider */}
      <Router>
        <Helmet>
          <title>Humsafar Cabs</title>
          <meta name="description" content="Humsafar cab service for cab booking" />
          <meta name="keywords" content="cabs, outstation, rental cabs" />
          {/* Add any other global meta tags here */}
        </Helmet>
        <Navbar />
        <PhonenumIcon />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          
          {/* Other routes */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
