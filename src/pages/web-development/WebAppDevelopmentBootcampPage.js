// WebAppDevelopmentBootcampPage.js
import React from 'react';
import Hero from '../../components/hero/Hero';
import Overview from '../../components/overview/Overview';
import Curriculum from '../../components/curriculum/Curriculum';
import Instructors from '../../components/instructors/Instructors';
import FAQ from '../../components/FAQ/FAQ';

const WebAppDevelopmentBootcampPage = () => {
  return (
    <div className="web-app-development-bootcamp-page">
      <Hero />
      <Overview />
      <Curriculum />
      <Instructors />
      <FAQ />
    </div>
  );
};

export default WebAppDevelopmentBootcampPage;
