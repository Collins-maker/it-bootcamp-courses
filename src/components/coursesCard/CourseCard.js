import React from 'react';

const CourseCard = ({ course }) => {
  if (!course || !course.image) {
    return null;
  }

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
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
