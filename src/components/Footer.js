import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./CSS/Footer.css";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

 

  return (
    <div className="footer-position">
    <div className="footer-wrapper">
      <footer className="footer text-center text-white">
        <div className="text-center p-3">
          <p>© 2023 Copyright by Lukas Lamberz</p>
          <section className="mb-4">
            {/* Social media icons */}
            <div className="d-flex justify-content-center mb-4">
              <div
                className="icon-container"
                onMouseEnter={() => handleIconHover("faFacebookF")}
                onMouseLeave={handleIconLeave}
              >
                <a
                  href="https://www.facebook.com/lukas.lamberz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    color="white"
                    size="2x"
                    className={`icon ${hoveredIcon === "faFacebookF" ? "hide" : ""}`}
                  />
                  <span className={`icon-text ${hoveredIcon === "faFacebookF" ? "show" : ""}`}>
                    Facebook
                  </span>
                </a>
              </div>
              <div
                className="icon-container"
                onMouseEnter={() => handleIconHover("faTwitter")}
                onMouseLeave={handleIconLeave}
              >
                <a
                  href="https://twitter.com/LamberzLukas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    color="white"
                    size="2x"
                    className={`icon ${hoveredIcon === "faTwitter" ? "hide" : ""}`}
                  />
                  <span className={`icon-text ${hoveredIcon === "faTwitter" ? "show" : ""}`}>
                    Twitter
                  </span>
                </a>
              </div>
              <div
                className="icon-container"
                onMouseEnter={() => handleIconHover("faInstagram")}
                onMouseLeave={handleIconLeave}
              >
                <a
                  href="https://instagram.com/blcklmb96?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="white"
                    size="2x"
                    className={`icon ${hoveredIcon === "faInstagram" ? "hide" : ""}`}
                  />
                  <span className={`icon-text ${hoveredIcon === "faInstagram" ? "show" : ""}`}>
                    Instagram
                  </span>
                </a>
              </div>
              <div
                className="icon-container"
                onMouseEnter={() => handleIconHover("faLinkedinIn")}
                onMouseLeave={handleIconLeave}
              >
                <a
                  href="https://www.linkedin.com/in/lukas-oliver-lamberz-206b30262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    color="white"
                    size="2x"
                    className={`icon ${hoveredIcon === "faLinkedinIn" ? "hide" : ""}`}
                  />
                  <span className={`icon-text ${hoveredIcon === "faLinkedinIn" ? "show" : ""}`}>
                    LinkedIn
                  </span>
                </a>
              </div>
              <div
                className="icon-container"
                onMouseEnter={() => handleIconHover("faGithub")}
                onMouseLeave={handleIconLeave}
              >
                <a
                  href="https://github.com/Lamboserker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="white"
                    size="2x"
                    className={`icon ${hoveredIcon === "faGithub" ? "hide" : ""}`}
                  />
                  <span className={`icon-text ${hoveredIcon === "faGithub" ? "show" : ""}`}>
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Footer;




