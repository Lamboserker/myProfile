import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './CSS/Footer.css'

const Footer = () => {
  return (
    <div className='footer-position'>
    <footer className="bg-dark text-center text-white">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <p> © 2023 Copyright by Lukas Lamberz</p> 
       <section className="mb-4">
          {/* Social media icons */}
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <a className="btn btn-outline-light btn-floating m-1 hover" href="https://www.facebook.com/lukas.lamberz/" role="button">
                <FontAwesomeIcon icon={faFacebookF}  />
              </a>
              <a className="btn btn-outline-light btn-floating m-1 hover" href="https://twitter.com/LamberzLukas" role="button">
                <FontAwesomeIcon icon={faTwitter}  />
              </a>
              <a className="btn btn-outline-light btn-floating m-1 hover" href="https://instagram.com/blcklmb96?igshid=OGQ5ZDc2ODk2ZA==" role="button">
                <FontAwesomeIcon icon={faInstagram}  />
              </a>
              <a className="btn btn-outline-light btn-floating m-1 hover" href="https://www.linkedin.com/in/lukas-oliver-lamberz-206b30262/" role="button">
                <FontAwesomeIcon icon={faLinkedinIn}  />
              </a>
              <a className="btn btn-outline-light btn-floating m-1 hover" href="https://github.com/Lamboserker" role="button">
                <FontAwesomeIcon icon={faGithub}  />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
