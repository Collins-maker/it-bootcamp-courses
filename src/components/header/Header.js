// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="WBS Coding School" />
        </div>
        <nav>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/web-app-development-bootcamp">Web App Development</Link></li>
            <li><Link to="/campus">Campus</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/Instructors">Instructors</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
