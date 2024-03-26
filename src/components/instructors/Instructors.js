// Instructors.js
import React from 'react';
import './Instructors.css'
import instructor1 from '../../images/instructor1.jpg';
import instructor2 from '../../images/instructor2.jpg';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: instructor1,
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: instructor2,
  },
  // Add more instructors here
];

const Instructors = () => {
  return (
    <div className="instructors">
      <h2>Our Instructors</h2>
      <div className="instructor-grid">
        {instructorsData.map((instructor) => (
          <div className="instructor" key={instructor.id}>
            <img src={instructor.image} alt={instructor.name} />
            <div className="instructor-info">
              <h3>{instructor.name}</h3>
              <p><strong>{instructor.title}</strong></p>
              <p>{instructor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
