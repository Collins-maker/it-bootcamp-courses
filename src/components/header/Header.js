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
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li> {/* Add link for courses page */}
          <li><Link to="/web-app-development-bootcamp">Web App Development</Link></li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
