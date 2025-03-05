import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <ContactForm />
      <div className="contact-details">
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/XxmangreatxX" target="_blank" rel="noopener noreferrer">github.com/XxmangreatxX</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
        <p>
          <strong>Portfolio:</strong> <a href="#">Your Portfolio Link</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
