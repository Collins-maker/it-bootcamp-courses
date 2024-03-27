// CareerServicesPage.js
import React from 'react';
import Hero from '../../components/hero/Hero'; 
import Services from '../../components/services/Services';
import heroCarrer from '../../images/heroCareer.jpg' 
const CareerServicesPage = () => {
  return (
    <div className="career-services-page">
      <Hero
        title="EMPOWERING TALENT – BEST IN CLASS"
        description="Got big plans? So do we! Our sole mission is to see you thrive in the tech industry – and that starts with understanding the specifics of the tech recruitment process."
        heroImage={heroCarrer}
      />
      <Services />
     
    </div>
  );
};

export default CareerServicesPage;
