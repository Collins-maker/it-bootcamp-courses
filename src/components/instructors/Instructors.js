// Instructors.js
import React from 'react';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor1.jpg',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor2.jpg',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor3.jpg',
  },
  {
    id: 4,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor4.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor5.jpg',
  },
  {
    id: 6,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor6.jpg',
  },
  {
    id: 7,
    name: 'John Doe',
    title: 'Lead Instructor',
    bio: 'John is an experienced developer with expertise in JavaScript, React, and Node.js.',
    image: '../../images/instructor7.jpg',
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