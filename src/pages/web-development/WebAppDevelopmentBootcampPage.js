// WebAppDevelopmentBootcampPage.js
import React from 'react';
import Hero from '../../components/hero/Hero';
import Overview from '../../components/overview/Overview';
import Curriculum from '../../components/curriculum/Curriculum';
import Instructors from '../../components/instructors/Instructors';
import FAQ from '../../components/FAQ/FAQ';
import heroWeb from '../../images/heroWeb.jpg'

const WebAppDevelopmentBootcampPage = () => {
  return (
    <div className="web-app-development-bootcamp-page">
      <Hero
        title="FULL-STACK WEB & APP DEVELOPMENT BOOTCAMP"
        description="From hands-on coding to Artificial Intelligence (AI) tools – become a web developer in 15 weeks!"
        buttonText1="Apply Now"
        heroImage={heroWeb}
      />
      <Overview />
      <Curriculum />
      <Instructors />
      <FAQ />
    </div>
  );
};

export default WebAppDevelopmentBootcampPage;
