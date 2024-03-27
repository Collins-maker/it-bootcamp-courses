import React from 'react';
import './Hero.css'; // Import CSS for styling

const Hero = ({ title, description, buttonText1, buttonText2, heroImage }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {buttonText1 && buttonText2 ? (
          <div className="button-container">
            <button className="explore-button">{buttonText1}</button>
            <button className="apply-button">{buttonText2}</button>
          </div>
        ) : (
          buttonText1 ? (
            <div className="button-container">
              <button className="explore-button">{buttonText1}</button>
            </div>
          ) : null
        )}
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
