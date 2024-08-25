import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ExampleWrapper from "./Modal";
import "./CSS/Contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [state, handleSubmit] = useForm("movapegk");

  useEffect(() => {
    // Überprüfe, ob state.errors existiert und kein null ist, bevor darauf zugegriffen wird.
    if (state.succeeded) {
      setSendStatus("success");
      console.log("Message sent successfully");
      setIsOpen(true); // Modal öffnen, wenn die Nachricht erfolgreich gesendet wurde
    } else if (state.errors && state.errors.length > 0) {
      setSendStatus("error");
      console.log("Failed to send message:", state.errors);
      setIsOpen(true); // Modal öffnen, wenn ein Fehler aufgetreten ist
    }
  }, [state.succeeded, state.errors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSendStatus("sending"); // Setze den Status auf "sending"
    handleSubmit(e); // Überlasse Formspree die Handhabung des Formulars
    console.log("Form submitted, waiting for response...");
  };

  return (
    <div className="contact-card" style={{ marginTop: "70px" }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="input-container">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" />
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
