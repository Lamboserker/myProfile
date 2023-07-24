import {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ExampleWrapper from './Test';
import './CSS/Contact.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm("xleydapv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid = await handleSubmit(e);
    if (isValid) {
      setIsOpen(true); // Open the modal after successful form submission.
    }
  };

  return (
    <div  className="contact-card">
    <h2 >Contact Me</h2>
    <form onSubmit={handleFormSubmit}>
      <div  className="input-container">
        <label htmlFor="fullName">Full name</label>
        <input  id="" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div  className="input-container">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div  className="input-container">
        <label htmlFor='message'>Your Message</label>
        <textarea  id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
     
    </form>
    <ExampleWrapper isOpen={isOpen} setIsOpen={setIsOpen} />
  </div>
  );
}

export default Contact;
