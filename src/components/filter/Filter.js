// Filter.js
import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <h3>Filter by:</h3>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="level">Level:</label>
        <select id="level" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {/* Add more filter options as needed */}
    </div>
  );
};

export default Filter;
