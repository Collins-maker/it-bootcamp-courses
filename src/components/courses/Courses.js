import React from 'react';
import './Courses.css'; // Import CSS for styling

const Courses = () => {
  // Sample data for courses (you can replace it with your actual data)
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master the fundamentals of web development with HTML, CSS, and JavaScript.',
      duration: '12 weeks',
      price: '$999',
    },
    {
      id: 2,
      title: 'React for Beginners',
      description: 'Learn React.js and build interactive user interfaces for modern web applications.',
      duration: '6 weeks',
      price: '$599',
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
