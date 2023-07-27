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

const SVGWithFooter = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <svg
    id="wave"
    style={{ transform: "rotate(0deg)", transition: "0.3s" }}
    viewBox="0 0 1440 240"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(147, 51, 234, 1)" offset="0%" />
          <stop stopColor="rgba(79, 70, 229, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: "translate(0, 0px)", opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,24L10.4,52C20.9,80,42,136,63,160C83.5,184,104,176,125,168C146.1,160,167,152,188,144C208.7,136,230,128,250,116C271.3,104,292,88,313,76C333.9,64,355,56,376,68C396.5,80,417,112,438,132C459.1,152,480,160,501,160C521.7,160,543,152,563,124C584.3,96,605,48,626,48C647,48,668,96,689,132C709.6,168,730,192,751,188C772.2,184,793,152,814,144C834.8,136,856,152,877,140C897.4,128,918,88,939,72C960,56,981,64,1002,60C1022.6,56,1043,40,1064,48C1085.2,56,1106,88,1127,84C1147.8,80,1169,40,1190,28C1210.4,16,1231,32,1252,48C1273,64,1294,80,1315,76C1335.7,72,1357,48,1377,44C1398.3,40,1419,56,1440,80C1460.9,104,1482,136,1492,152L1502.6,168L1502.6,240L1492.2,240C1481.7,240,1461,240,1440,240C1419.1,240,1398,240,1377,240C1356.5,240,1336,240,1315,240C1293.9,240,1273,240,1252,240C1231.3,240,1210,240,1190,240C1168.7,240,1148,240,1127,240C1106.1,240,1085,240,1064,240C1043.5,240,1023,240,1002,240C980.9,240,960,240,939,240C918.3,240,897,240,877,240C855.7,240,835,240,814,240C793,240,772,240,751,240C730.4,240,710,240,689,240C667.8,240,647,240,626,240C605.2,240,584,240,563,240C542.6,240,522,240,501,240C480,240,459,240,438,240C417.4,240,397,240,376,240C354.8,240,334,240,313,240C292.2,240,271,240,250,240C229.6,240,209,240,188,240C167,240,146,240,125,240C104.3,240,83,240,63,240C41.7,240,21,240,10,240L0,240Z"
      />

      {/* Footer */}
      <foreignObject x="10" y="70%" width="100%" height="30%">
        <div
          className="footer-position"
          style={{
            fontSize: "12px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="footer-wrapper">
            <footer className="footer text-center text-white">
              <div className="text-center p-3">
                
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
                        <span
                          className={`icon-text ${
                            hoveredIcon === "faFacebookF" ? "show" : ""
                          }`}
                        >
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
                        <span
                          className={`icon-text ${
                            hoveredIcon === "faTwitter" ? "show" : ""
                          }`}
                        >
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
                        href="https://www.instagram.com/lukas.lamberz/"
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
                        <span
                          className={`icon-text ${
                            hoveredIcon === "faInstagram" ? "show" : ""
                          }`}
                        >
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
                        href="https://www.linkedin.com/in/lukas-lamberz/"
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
                        <span
                          className={`icon-text ${
                            hoveredIcon === "faLinkedinIn" ? "show" : ""
                          }`}
                        >
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
                        href="https://github.com/lamberzl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          color="white"
                          size="2x"
                          className={`icon ${hoveredIcon === "faGithub" ? "hide" : ""}`}
                        />
                        <span
                          className={`icon-text ${
                            hoveredIcon === "faGithub" ? "show" : ""
                          }`}
                        >
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
      </foreignObject>
    </svg>
  );
};

export default SVGWithFooter;
