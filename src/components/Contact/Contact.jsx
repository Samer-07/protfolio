import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./contact.css"

const Contact = () => {
  // حالة لتخزين ما إذا كان المحتوى مرئيًا أم لا
  const [emailVisible, setEmailVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [instagramVisible, setInstagramVisible] = useState(false);
  const [githubVisible, setGithubVisible] = useState(false);  


  const toggleEmail = () => setEmailVisible(!emailVisible);
  const togglePhone = () => setPhoneVisible(!phoneVisible);
  const toggleInstagram = () => setInstagramVisible(!instagramVisible);
  const toggleGithub = () => setGithubVisible(!githubVisible); 


  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Kontakta mig</h2>
        <p>Jag skulle gärna höra från dig! </p>
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon
              icon={faEnvelope}
              onClick={toggleEmail} 
              className="icon"
            />
            {emailVisible && (  
              <div className="info-details email">
                <a href="mailto:elhadeysamer@gmail.com">elhadeysamer@gmail.com</a>
              </div>
            )}
          </div>

          <div className="info-item">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              onClick={togglePhone}  
              className="icon"
            />
            {phoneVisible && (  
              <div className="info-details phone">
                <a href="tel:+46762674309">076-267 43 09</a>
              </div>
            )}
          </div>

        
          <div className="info-item">
            <FontAwesomeIcon
              icon={faInstagram}
              onClick={toggleInstagram}  
              className="icon"
            />
            {instagramVisible && (  
              <div className="info-details instagram">
                <a
                  href="https://www.instagram.com/samer_photography_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  samer_photography_
                </a>
              </div>
            )}
          </div>
          <div className="info-item">
            <FontAwesomeIcon
              icon={faGithub} 
              onClick={toggleGithub}  
              className="icon"
            />
            {githubVisible && (  
              <div className="info-details github">
                <a
                  href="https://github.com/Samer-07"  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Samer-07
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
     
  );
};

export default Contact;
