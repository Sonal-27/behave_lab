// src/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './joinus.css'; // Import the custom CSS file

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contact', {
        email,
        subject,
        message,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="contact-page">
    <div className="grid-item">
      <h3>We would love to hear from you!!!</h3>
    </div>
    <div className="grid-item">
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group d-flex justify-content-center">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    <div className="grid-item d-flex justify-content-center">
        <p>For general inquiries, you can also contact us via  
          <a href="mailto:behave@iu.edu" className="no-underline-link"> behave@iu.edu</a></p>
    </div>

    </div>

  );
};

export default ContactForm;
