import React from 'react';

const CourseCard = ({ course }) => {
  // Check if course object and image property are defined
  if (!course || !course.image) {
    return null; // Return null or handle the error gracefully
  }

  return (
    <div className="course-card">
      <img src={require(`../../images/${course.image}`).default} alt={course.title} />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          <span>Duration: {course.duration}</span>
          <span>Price: {course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
