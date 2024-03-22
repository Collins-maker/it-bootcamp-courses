// CourseCard.js
import React from 'react';

const CourseCard = ({ title, description, imageSrc }) => {
  return (
    <div className="course-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Add more details or buttons for each course */}
    </div>
  );
};

export default CourseCard;
