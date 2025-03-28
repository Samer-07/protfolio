import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
     

      <div className="skills">
      <h2>Jag är en frontend-utvecklare student</h2>
        <h3>Mina färdigheter</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Responsiv webbdesign</li>
          <li>API-hantering och backend-integration</li>
          <li> UI,UX-design</li>
        </ul>
    
        <h3>Min Tidigare Erfarenhet</h3>
        <h4>Fotgraf och videoredigering </h4>
        <ul>
          <li>Med erfarenhet i Adobe Photoshop,Adobe Premiere och Adobe Audition</li>
          <li>Expert i bildredigering och videoredigering</li>
        </ul>
      </div>

      <div className="cv-section">
        <h3>Mitt CV</h3>
        <a href="/cv.pdf" download>
          Ladda ner mitt CV
        </a>
      </div>
    </div>
  );
};

export default About;
