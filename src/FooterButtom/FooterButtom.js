import React from 'react';
import './FooterButtom.css'; // You'll need to create this CSS file for styling

function FooterButtom() {
  return (
    <div className="footer-bottom">
      <div className="footer-column">
        <h3>S'informer</h3>
        <ul>
          <li>&gt; A propos</li>
          <li>&gt; Livraison</li>
          <li>&gt; Mentions légales</li>
          <li>&gt; Contactez-nous</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Nous contacter</h3>
        <ul>
          <li>🛍️ ITech Store</li>
          <li>🏠 Boulevard Maghreb Arabe, Sousse</li>
          <li>📞 58 402 400 | 56 603 604</li>
          <li>✉️ store@itech.tn</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterButtom;