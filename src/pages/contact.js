import React from "react";
import Container from "../components/container";

const Contact = () => {
  return (
    <Container>
      <div className="section">
        <h2 className="section-title">Contact me</h2>
        <p className="section-text">
          Click any of the buttons bellow and send me your message. Let's work
          together!
        </p>
        <div className="contact">
          <a
            href="https://github.com/Ceyene"
            target="_blank"
            className="contact-buttons"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ce-y-ene/"
            target="_blank"
            className="contact-buttons"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
