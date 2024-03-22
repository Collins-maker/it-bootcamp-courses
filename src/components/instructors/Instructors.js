import React from 'react';

const Instructors = () => {
  return (
    <div className="instructors">
      <h2>Our Instructors</h2>
      <div className="instructor">
        <img src="instructor1.jpg" alt="Instructor 1" />
        <div>
          <h3>John Doe</h3>
          <p>Lead Instructor</p>
          <p>John is a seasoned web developer with over 10 years of experience...</p>
        </div>
      </div>
      <div className="instructor">
        <img src="instructor2.jpg" alt="Instructor 2" />
        <div>
          <h3>Jane Smith</h3>
          <p>Backend Developer</p>
          <p>Jane is passionate about backend development and has expertise in...</p>
        </div>
      </div>
      {/* Add more instructors as needed */}
    </div>
  );
};

export default Instructors;
