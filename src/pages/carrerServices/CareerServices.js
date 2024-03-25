// CareerServicesPage.js
import React from 'react';
import Hero from '../../components/hero/Hero'; 
import Services from '../../components/services/Services'; 
const CareerServicesPage = () => {
  return (
    <div className="career-services-page">
      <Hero 
        title="Career Services"
        description="Explore our comprehensive career services designed to help you kickstart your tech career."
        buttonText="Get Started"
      />
      <Services />
     
    </div>
  );
};

export default CareerServicesPage;
