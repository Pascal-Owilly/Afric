import React, { useState, useEffect } from 'react';

import img1 from '../images/img-2.jpg';
import img2 from '../images/school3.jpg';
import img3 from '../images/img-8.jpg';
import img5 from '../images/school2.jpg';

function HeroSection() {
  const [backgroundImages, setBackgroundImages] = useState([img1, img2, img3, img5]);


  const [currentBackgroundImageIndex, setCurrentBackgroundImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundImageIndex((currentBackgroundImageIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentBackgroundImageIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    transition: '1s ease-in',
    transitionDuration: '2s'
  };

  const overlayStyle = {
    backgroundColor: '#080825',
    opacity: 0.8,
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    transition: 'opacity 0.5s',
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    width: '20px',
    height: '20px',
    borderRight: '2px solid #fff',
    borderBottom: '2px solid #fff',
    animation: 'bounce 2s infinite',
  };

  const imageTexts = [
    'Get the wamth of nature',
    'Buy your plants',
    'Make it count',
  ];

  

  const [currentImageTextIndex, setCurrentImageTextIndex] = useState(0);

  const handleMouseEnter = () => {
    const nextIndex = (currentImageTextIndex + 1) % imageTexts.length;
    setCurrentImageTextIndex(nextIndex);
  };

  return (
    <section style={backgroundImageStyle}>
      <div
        style={overlayStyle}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleMouseEnter}
      >
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '20px' }}>
          Mwani Africa
        </h1>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {imageTexts[currentImageTextIndex]}
        </p>
        <div style={arrowStyle}></div>
      </div>
    </section>
  );
}

export default HeroSection;
