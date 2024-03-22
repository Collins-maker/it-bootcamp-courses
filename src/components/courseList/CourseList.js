import React from 'react';
import CourseCard from './CourseCard'; // Import the CourseCard component

const CourseList = () => {
  // Sample course data (replace with actual data from your backend or API)
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      description: 'Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more.',
      image: 'course1.png',
      duration: '12 weeks',
      price: '$2000'
    },
    {
      id: 2,
      title: 'Frontend Web Development',
      description: 'Master the fundamentals of frontend web development with HTML, CSS, and JavaScript.',
      image: 'course2.jpg',
      duration: '6 weeks',
      price: '$1000'
    },
    // Add more course objects as needed
  ];

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
