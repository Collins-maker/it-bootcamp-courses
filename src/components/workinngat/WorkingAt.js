// WorkingAt.js
import React, { useState, useEffect } from "react";
import './WorkingAt.css'
import company1 from '../../images/company1.jpg'
import company2 from '../../images/company2.jpg'
import company3 from '../../images/company3.jpg'
import company4 from '../../images/company4.jpg'
import company5 from '../../images/company5.jpg'
import company6 from '../../images/company6.jpg'
import company7 from '../../images/company7.jpg'
import company8 from '../../images/company8.jpg'
import company9 from '../../images/company9.jpg'
import company10 from '../../images/company10.jpg'
import company11 from '../../images/company11.jpg'
import company12 from '../../images/company12.jpg'
import company13 from '../../images/company13.jpg'
import company14 from '../../images/company14.jpg'
import company15 from '../../images/company15.jpg'
import company16 from '../../images/company16.jpg'
import company17 from '../../images/company17.jpg'
import company18 from '../../images/company18.jpg'

const WorkingAt = () => {
  const companies = [
    company1, company2, company3, company4, company5, company6,
    company7, company8, company9, company10, company11, company12,
    company13, company14, company15, company16, company17, company18
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 6 >= companies.length ? 0 : prevSlide + 6));
    }, 3000);
    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <div className="working-at-container">
      <h2>Our Graduates are now Working At:</h2>
      <div className="carousel">
        <div className="slide">
          {companies.slice(currentSlide, currentSlide + 6).map((company, index) => (
            <img key={index} src={company} alt={`company ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingAt;
