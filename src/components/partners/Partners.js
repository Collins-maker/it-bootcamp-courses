import React from 'react';
import './Partners.css'; // Import CSS for styling
import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.jpg';
import partner3 from '../../images/partner3.png';

const Partners = () => {
  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        <img src={partner1} alt="Partner 1" />
        <img src={partner2} alt="Partner 2" />
        <img src={partner3} alt="Partner 3" />
      </div>
    </div>
  );
};

export default Partners;
