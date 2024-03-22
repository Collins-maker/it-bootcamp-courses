import React from 'react';

const Curriculum = () => {
  return (
    <div className="curriculum">
      <h2>Curriculum</h2>
      <div className="module">
        <h3>Module 1: Introduction to Web Development</h3>
        <ul>
          <li>HTML Basics</li>
          <li>CSS Fundamentals</li>
          <li>Introduction to JavaScript</li>
        </ul>
      </div>
      <div className="module">
        <h3>Module 2: Frontend Development with React</h3>
        <ul>
          <li>React Components and Props</li>
          <li>State Management with Redux</li>
          <li>Routing with React Router</li>
        </ul>
      </div>
      <div className="module">
        <h3>Module 3: Backend Development with Node.js</h3>
        <ul>
          <li>Introduction to Node.js</li>
          <li>Express.js Framework</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
      {/* Add more modules as needed */}
    </div>
  );
};

export default Curriculum;
