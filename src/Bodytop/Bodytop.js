import React from 'react';
import './Bodytop.css';

// Import local images
import macBookProBanner from '../images/MBPM3.jpg';
import macBookAirBanner from '../images/MA15.jpg';
import macBookPro1 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';
import macBookPro2 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';
import macBookPro3 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';
import macBookAir1 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';
import macBookAir2 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';
import macBookAir3 from '../images/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg';

// Object to hold imported product images
const productImages = {
  macBookPro1,
  macBookPro2,
  macBookPro3,
  macBookAir1,
  macBookAir2,
  macBookAir3,
};

// Product data for MacBook Pro
const macBookProProducts = [
  {
    image: productImages.macBookPro1,
    title: "MacBook Air 13'' Apple M2",
    specs: "8Coeurs CPU 8Coeurs GPU - 8GB SSD 256Go - Midnight",
    price: "4699,000 TND",
    discount: "-500,000 TND",
  },
  {
    image: productImages.macBookPro2,
    title: "MacBook Air 13'' Apple M2",
    specs: "CPU 8C GPU 8C 256Go SSD - Starlight",
    price: "4199,000 TND",
    discount: "",
  },
  {
    image: productImages.macBookPro3,
    title: "MacBook Air 13'' Apple M3",
    specs: "CPU 8C GPU 8C 256Go SSD - Midnight",
    price: "4799,000 TND",
    discount: "",
  },
];

// Product data for MacBook Air
const macBookAirProducts = [
  {
    image: productImages.macBookAir1,
    title: "MacBook Air 13'' Apple M3",
    specs: "CPU 8C GPU 10C 24GB SSD 512Go - Space Grey",
    price: "6899,000 TND",
    discount: "-900,000 TND",
  },
  {
    image: productImages.macBookAir2,
    title: "MacBook Pro 14'' Apple M1",
    specs: "8Coeurs GPU 14Coeurs - SSD 256Go - Space Grey",
    price: "3089,000 TND",
    discount: "",
  },
  {
    image: productImages.macBookAir3,
    title: "MacBook Pro 14'' Puce Apple M3",
    specs: "8Coeurs 10Coeurs GPU SSD 512Go - Space Grey",
    price: "6699,000 TND",
    discount: "",
  },
];

function Bodytop() {
  return (
    <div className="bodytop">
      {/* MacBook Pro Section */}
      <section className="section">
        <div className="section-header"></div>
        <div className="section-content">
          <div className="banner">
            <img src={macBookProBanner} alt="MacBook Pro Banner" />
            <button className="buy-button">Acheter</button>
          </div>
          <div className="products">
            {macBookProProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.discount && (
                  <div className="promo-badge">Promo !</div>
                )}
                <h3 className="product-title">{product.title}</h3>
                <p className="product-specs">{product.specs}</p>
                <p className="product-price">{product.price}</p>
                {product.discount && <p className="product-discount">{product.discount}</p>}
                <a href="#" className="product-link">Devenir revendeur</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MacBook Air Section */}
      <section className="section">
        <div className="section-header"></div>
        <div className="section-content">
          <div className="banner">
            <img src={macBookAirBanner} alt="MacBook Air Banner" />
            <button className="buy-button">Acheter</button>
          </div>
          <div className="products">
            {macBookAirProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.discount && (
                  <div className="promo-badge">Promo !</div>
                )}
                <h3 className="product-title">{product.title}</h3>
                <p className="product-specs">{product.specs}</p>
                <p className="product-price">{product.price}</p>
                {product.discount && <p className="product-discount">{product.discount}</p>}
                <a href="#" className="product-link">Devenir revendeur</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bodytop;
