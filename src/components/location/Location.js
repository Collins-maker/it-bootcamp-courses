// LocationComponent.js
import React from 'react';

const LocationComponent = () => {
  return (
    <div className="location">
      <div className="map">
        {/* Add your map component or embed Google Maps */}
        <iframe
          title="WBS Coding School Berlin Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.827903171738!2d13.399286015783898!3d52.51380025986936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e25aeffbc57%3A0x203463e22ba20b10!2sWBS%20CODING%20SCHOOL%20Berlin!5e0!3m2!1sen!2sde!4v1631687266639!5m2!1sen!2sde"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">
        <h3>Location</h3>
        <p>WBS CODING SCHOOL Berlin</p>
        <p>Friedrichstraße 194</p>
        <p>10117 Berlin, Germany</p>
      </div>
    </div>
  );
};

export default LocationComponent;
