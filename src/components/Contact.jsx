import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ExampleWrapper from "./Modal";
import "./CSS/Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [state, handleSubmit] = useForm("movapegk");

  // Zustände für die Formulardaten
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setSendStatus("success");
      console.log("Message sent successfully");
      setIsOpen(true);
      // Formularfelder zurücksetzen
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else if (state.errors && state.errors.length > 0) {
      setSendStatus("error");
      console.log("Failed to send message:", state.errors);
      setIsOpen(true);
    }
  }, [state.succeeded, state.errors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSendStatus("sending");
    handleSubmit(e);
    console.log("Form submitted, waiting for response...");
  };

  // Handler zum Aktualisieren des Formularzustands
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-card" style={{ marginTop: "70px" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="input-container">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" className="send">
          Send Message
        </button>
      </form>
      <ExampleWrapper
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sendStatus={sendStatus}
      />
    </div>
  );
}

export default Contact;
