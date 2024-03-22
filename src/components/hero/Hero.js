import React from 'react';
import './Hero.css'; // Import CSS for styling
import heroImage from '../../images/heroImage.jpg'; // Import the hero image

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>IGNITE YOUR CAREER IN TECH</h1>
        <p>
          Turn ambition into job-ready skills and become a Web Developer, Data Scientist, Data Analyst, UX/UI Product Designer, or Marketing Analyst from scratch.
        </p>
        <div className="button-container">
          <button className="explore-button">Explore Bootcamps</button>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
