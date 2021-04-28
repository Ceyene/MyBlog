import React from "react";
import Container from "../components/container";
import Cyn from "../images/Cyn.png";

const About = () => {
  return (
    <Container>
      <div className="section">
        <h2 className="section-title">About me</h2>
        <div className="section-information">
          <img src={Cyn} alt="Cynthia Romero" />
          <div>
            <p>Welcome to this practice Gatsby and GraphQL blog!</p>
            <p>
              My name is Cynthia Romero. I'm a Front End Web Developer from
              Cordoba, Argentina. As an enthusiast of JavaScript, I continue
              exploring any new features and libraries.
            </p>
            <p>Currently, I'm looking for my first job in this industry.</p>
            <p>Wish me luck!</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
