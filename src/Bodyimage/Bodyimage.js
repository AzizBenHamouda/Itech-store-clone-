import React from 'react';
import './Bodyimage.css'; // We'll style it cleanly

// Import your image (you can adjust the path)
import deviceImage from '../images/Screenshot 2025-04-26 201652.png'; // rename your uploaded image to "device-banner.png" or similar

function Bodyimage() {
  return (
    <div className="bodyimage-container">
      <img src={deviceImage} alt="Apple Devices" className="bodyimage-banner" />
    </div>
  );
}

export default Bodyimage;
