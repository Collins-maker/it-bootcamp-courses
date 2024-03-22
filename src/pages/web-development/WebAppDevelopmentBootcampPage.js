// WebAppDevelopmentBootcampPage.js
import React from 'react';
// import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Overview from '../../components/overview/Overview';
import Curriculum from '../../components/curriculum/Curriculum';
import Instructors from '../../components/instructors/Instructors';
import FAQ from '../../components/FAQ/FAQ';
import Contact from '../../components/contact/Contact';

const WebAppDevelopmentBootcampPage = () => {
  return (
    <div className="web-app-development-bootcamp-page">
      <Hero />
      <Overview />
      <Curriculum />
      <Instructors />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebAppDevelopmentBootcampPage;
