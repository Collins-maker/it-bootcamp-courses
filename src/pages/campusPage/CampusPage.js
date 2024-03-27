// CampusPage.js
import React from 'react';
import './CampusPage.css'
import Hero from '../../components/hero/Hero'; 
import Programs from '../../components/programs/Programs'; 
import LocationComponent from '../../components/location/Location'; 
import Testimonials from '../../components/testimonials/Testimonials'; 
import herocampus from '../../images/herocampus.jpg'


const CampusPage = () => {
  return (
    <div className="campus-page">
      <Hero
        title="WBS CODING SCHOOL CAMPUS BERLIN"
        description="Live and study together with your classmates, preparing your final portfolio project. You’ll experience tech work in conditions similar to those of a real-world company, you’ll be coached on how to develop your career, you’ll network with fellow students, and in your free time, you can enjoy Berlin!"
        heroImage={herocampus}
      />
      <Programs />
      <LocationComponent />
      <Testimonials />
      
    </div>
  );
};

export default CampusPage;
