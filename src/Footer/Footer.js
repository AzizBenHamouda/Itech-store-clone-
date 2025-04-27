import React from 'react';
import './Footer.css'; // Assuming you have a Footer.css file


import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Heart icon is a solid icon

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="#" className="icon facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon google-plus">
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon heart">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon pinterest">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon tiktok">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <span className="divider"></span>
        <a href="#" className="icon whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}

export default Footer;