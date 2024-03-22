import React from 'react';
import './Partners.css'; // Import CSS for styling

const Partners = () => {
  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        <img src="/images/partner1.png" alt="Partner 1" />
        <img src="/images/partner2.jpg" alt="Partner 2" />
        <img src="/images/partner3.png" alt="Partner 3" />
        {/* Add more partner logos as needed */}
      </div>
    </div>
  );
};

export default Partners;
