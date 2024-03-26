import React from 'react';
import './Testimonials.css'; // Import CSS for styling
import profile1 from '../../images/profile1.jpg'; // Import profile pictures
import profile2 from '../../images/profile2.jpg';
import profile3 from '../../images/profile3.jpg';

const Testimonials = () => {
  // Sample data for testimonials (you can replace it with your actual data)
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      quote: 'The coding school provided me with invaluable skills and knowledge. I highly recommend their courses!',
      image: profile1,
    },
    {
      id: 2,
      author: 'Jane Smith',
      quote: 'I\'m amazed by the quality of instruction and support I received from the coding school. Thank you!',
      image: profile2,
    },
    {
      id: 3,
      author: 'John Doe',
      quote: 'The coding school provided me with invaluable skills and knowledge. I highly recommend their courses!',
      image: profile3,
    },
    
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.author} className="profile-pic" />
            <p>{testimonial.quote}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
