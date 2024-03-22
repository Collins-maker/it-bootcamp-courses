// CampusPage.js
import React from 'react';
import './CampusPage.css'
import CampusHero from '../../components/campusHero/CampusHero'; 
import Programs from '../../components/programs/Programs'; 
import LocationComponent from '../../components/location/Location'; 
import Testimonials from '../../components/testimonials/Testimonials'; 


const CampusPage = () => {
  return (
    <div className="campus-page">
      <CampusHero
        title="Welcome to WBS Coding School Berlin"
        description="Learn coding from industry experts in a dynamic and supportive environment."
        buttonText="Explore Programs"
      />
      <Programs />
      <LocationComponent />
      <Testimonials />
      
    </div>
  );
};

export default CampusPage;
