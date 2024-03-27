import React from 'react';
import './Services.css'; // Import CSS for styling

const Services = () => {
  return (
    <div className="services">
      <h2>Our Career Services</h2>
      <div className="service">
        <h3>Job Placement Assistance</h3>
        <p>We help our students connect with hiring partners and navigate the job search process.</p>
      </div>
      <div className="service">
        <h3>Career Counseling</h3>
        <p>Our experienced career counselors provide personalized guidance and support for career development.</p>
      </div>
      <div className="service">
        <h3>Resume Building</h3>
        <p>Learn how to create an effective resume that highlights your skills and experience.</p>
      </div>
      <div className="service">
        <h3>Interview Preparation</h3>
        <p>Get ready for interviews with mock interviews, tips, and practice sessions.</p>
      </div>
    </div>
  );
};

export default Services;
