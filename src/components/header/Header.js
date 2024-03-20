// Header.js

import React from 'react';
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="WBS Coding School" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
