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

  const getIconName = (iconName) => {
    switch (iconName) {
      case "faFacebookF":
        return "Facebook";
      case "faTwitter":
        return "Twitter";
      case "faInstagram":
        return "Instagram";
      case "faLinkedinIn":
        return "LinkedIn";
      case "faGithub":
        return "GitHub";
      default:
        return "";
    }
  };

  return (
    <div className="footer-position">
      <footer className="text-center text-white ">
        <div className="text-center p-3">
          <p>© 2023 Copyright by Lukas Lamberz</p>
          <section className="mb-4">
            {/* Social media icons */}
            <div className="d-flex justify-content-center mb-3">
              <div className="icon-container" onMouseEnter={() => handleIconHover("faFacebookF")} onMouseLeave={handleIconLeave}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2x"
                  className={`icon ${hoveredIcon === "faFacebookF" ? "hide" : ""}`}
                />
                <span className={`icon-text ${hoveredIcon === "faFacebookF" ? "show" : ""}`}>
                  Facebook
                </span>
              </div>
              <div className="icon-container" onMouseEnter={() => handleIconHover("faTwitter")} onMouseLeave={handleIconLeave}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className={`icon ${hoveredIcon === "faTwitter" ? "hide" : ""}`}
                />
                <span className={`icon-text ${hoveredIcon === "faTwitter" ? "show" : ""}`}>
                  Twitter
                </span>
              </div>
              <div className="icon-container" onMouseEnter={() => handleIconHover("faInstagram")} onMouseLeave={handleIconLeave}>
  <FontAwesomeIcon
    icon={faInstagram}
    size="2x"
    className={`icon ${hoveredIcon === "faInstagram" ? "hide" : ""}`}
  />
  <span className={`icon-text ${hoveredIcon === "faInstagram" ? "show" : ""}`}>
    Instagram
  </span>
</div>

<div className="icon-container" onMouseEnter={() => handleIconHover("faLinkedinIn")} onMouseLeave={handleIconLeave}>
  <FontAwesomeIcon
    icon={faLinkedinIn}
    size="2x"
    className={`icon ${hoveredIcon === "faLinkedinIn" ? "hide" : ""}`}
  />
  <span className={`icon-text ${hoveredIcon === "faLinkedinIn" ? "show" : ""}`}>
    LinkedIn
  </span>
</div>

<div className="icon-container" onMouseEnter={() => handleIconHover("faGithub")} onMouseLeave={handleIconLeave}>
  <FontAwesomeIcon
    icon={faGithub}
    size="2x"
    className={`icon ${hoveredIcon === "faGithub" ? "hide" : ""}`}
  />
  <span className={`icon-text ${hoveredIcon === "faGithub" ? "show" : ""}`}>
    GitHub
  </span>
</div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
