import React from 'react';
import './Bodycenter.css';

// Import images manually
import airpods from '../images/apple-airpods-4ème-génération.jpg';
import adapter35w from '../images/apple-dual-usb-c-power-adapter-35w-a2676.jpg';
import keyboardfolio from '../images/apple-magic-keyboard-folio-french-pour-ipad-10e-gén-a2695-white.jpg';
import cablelightning from '../images/MA15.jpg';
import adapter20w from '../images/usb-c-charge-cable-1-m-iphone-15-iphone-16-mm093zma.jpg';
import chargecable from '../images/image1-removebg-preview.png';
import earpods from '../images/MBPM3.jpg';
import magsafecable from '../images/apple-pencil-pro-pour-ipad-pro-m4-et-ipad-air-m2-2024.jpg';

const products = [
  { id: 1, name: 'AirPods 4', price: '1099,000 TND', image: airpods },
  { id: 2, name: 'Apple Dual USB-C Power Adapter 35W', price: '349,000 TND', image: adapter35w },
  { id: 3, name: 'Apple Magic Keyboard Folio French Pour iPad 10e gén', price: '1299,000 TND', image: keyboardfolio },
  { id: 4, name: 'Câble Apple USB-C vers Lightning - 1m', price: '139,000 TND', image: cablelightning },
  { id: 5, name: 'USB-C Power Adapter 20W', price: '149,000 TND', image: adapter20w },
  { id: 6, name: 'USB-C Charge Cable (1m) iPhone 15/16', price: '139,000 TND', image: chargecable },
  { id: 7, name: 'Apple EarPods with Lightning Connector', price: '135,000 TND', image: earpods },
  { id: 8, name: 'Apple USB-C Vers Magsafe 3 Cable (2m)', price: '289,000 TND', image: magsafecable },
];

function Bodycenter() {
  return (
    <div className="bodycenter-wrapper">
  <h1 className="title">MADE BY APPLE</h1>
  
  <div className="bodycenter-container">
    {products.map(product => (
      <div key={product.id} className="card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Bodycenter;
