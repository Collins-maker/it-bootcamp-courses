// Programs.js
import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <h2>Our Programs</h2>
      <div className="program">
        <h3>Web Development Bootcamp</h3>
        <p>
          Our comprehensive Web Development Bootcamp covers HTML, CSS, JavaScript, React, Node.js,
          and more. Get hands-on experience and launch your career in web development.
        </p>
        <a href="/web-development-bootcamp">Learn More</a>
      </div>
      {/* Add more program entries as needed */}
    </div>
  );
};

export default Programs;
