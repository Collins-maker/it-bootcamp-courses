// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Import CSS file for global styles
import Header from './components/header/Header';
import  Hero from './components/hero/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import CoursesPage from './pages/courses/CoursesPage';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursesPage />} /> {/* Route for the courses page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Courses />
    <Testimonials />
    <Partners />
  </>
);

export default App;
