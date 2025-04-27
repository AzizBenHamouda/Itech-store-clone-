import React from 'react';
import './Footer.css'; // You'll need to create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>
          ABONNEZ-VOUS À NOTRE NEWSLETTER <br />
          et recevez toutes nos nouveautés et nos promotions
        </h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Votre adresse e-mail" />
          <button>S'abonner</button>
        </div>
      </div>

      {/* Links Section */}
      <div className="links-section">
        <div className="link-column">
          <span className="icon">🍏</span>
          <p>Revendeur Agréé Apple</p>
        </div>
        <div className="link-column">
          <span className="icon">🏠</span>
          <p>Livraison à domicile</p>
        </div>
        <div className="link-column">
          <span className="icon">📞</span>
          <p>Service commercial 58 402 400</p>
        </div>
        <div className="link-column">
          <span className="icon">💳</span>
          <p>Paiement à la livraison</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;