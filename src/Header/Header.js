import React from 'react';
import './Header.css'; // Import the external CSS file
import AppleLogo from '../images/logo1.jpg'; // Placeholder for the Apple logo (you'll need to add this file)

function Header() {
  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left">
        <span className="navbar-title"></span>
        <img
          src={AppleLogo}
          alt="Apple Logo"
          className=""
        />
        <span className="navbar-subtitle">Revendeur Agréé</span>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="navbar-center">
        <a href="#" className="nav-link">
        <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
</svg>
            
        </a>
        {['Mac', 'iPad', 'iPhone', 'Watch', 'Music', 'Accessoires', 'Plus'].map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Section: Icons and Links */}
      <div className="navbar-right">
  <a href="#" className="nav-link nav-link-icon">
    <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14z"/>
    </svg>
    <span>Rechercher</span>
  </a>
  <a href="#" className="nav-link nav-link-icon">
    <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
    </svg>
    <span>Connexion</span>
  </a>
  <a href="#" className="nav-link nav-link-icon">
    <svg className="nav-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1-2H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"/>
    </svg>
    <span>Panier</span>
  </a>
</div>
    </nav>
  );
}

export default Header;