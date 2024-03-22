import React from 'react';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How long is the bootcamp?</h3>
        <p>The bootcamp lasts for 12 weeks.</p>
      </div>
      <div className="faq-item">
        <h3>Is there any prerequisite for joining?</h3>
        <p>While there are no strict prerequisites, basic knowledge of HTML, CSS, and JavaScript is recommended.</p>
      </div>
      <div className="faq-item">
        <h3>What is the class schedule?</h3>
        <p>Classes are held from Monday to Friday, 9:00 AM to 5:00 PM.</p>
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQ;
