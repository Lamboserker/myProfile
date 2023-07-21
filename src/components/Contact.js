import React, { useState } from 'react';
import '../components/CSS/Contact.css'; // Styling file for the Contact component

const Contact = () => {
  // State variables to store input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here (you can add your logic to send the data to a server or perform any other action)
    // For this example, we'll just log the data to the console
    console.log('Form data:', { firstName, lastName, email, message });
    // Reset the form after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-card">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
