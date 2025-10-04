import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const PhonenumIcon = () => {
  return (
    <a
      href="tel:9956390320"
      style={styles.phoneIconContainer}
    >
      <FaPhoneAlt style={styles.icon} />
    </a>
  );
};

const styles = {
  phoneIconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'linear-gradient(135deg, #25D366, #128C7E)', // Gradient background
    color: 'white',
    padding: '12px',
    borderRadius: '50%', // Fully rounded to make the button circular
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)', // Softer shadow for depth
    transition: 'box-shadow 0.3s ease', // Smooth transition for hover effects
    zIndex: 1000,
    width: '50px', // Set fixed width for the circle
    height: '50px', // Set fixed height for the circle
  },
  icon: {
    fontSize: '22px',
  },
};

export default PhonenumIcon;
