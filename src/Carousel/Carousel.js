import React, { useState } from 'react';
import './Carousel.css';

// Import local images
import watch1 from '../images/image1-removebg-preview.png';
import watch2 from '../images/MBPM3.jpg';
import watch3 from '../images/MA15.jpg';

const carouselImages = [watch1, watch2, watch3];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {/* Left Arrow */}
      <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Carousel Content */}
      <div className="carousel-content">
        <div className="carousel-text">
          <div className="carousel-title">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
              className="apple-logoo"
            />
            <span>WATCH</span>
          </div>
          <div className="carousel-subtitle">SERIES 10</div>
          <h1 className="carousel-heading">Encore plus fine.<br />Toujours plus grande.</h1>
          <p className="carousel-availability">Disponible maintenant</p>
        </div>
        <div className="carousel-image">
          <img src={carouselImages[currentIndex]} alt="Apple Watch Series 10" />
        </div>
      </div>

      {/* Right Arrow */}
      <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
