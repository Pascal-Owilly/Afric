import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import './Hero.css'

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

function HeroSection() {
  const [backgroundImages, setBackgroundImages] = useState([img1, img2, img3, img4]);


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

  // Set slides on hero section

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const [text, setText] = useState('Option 1');
  const texts = ['The love of gardening ', 'Plants are nature\'s healers', 'The earth laughs in flowers', 'Plants are the lungs of the earth'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [textIndex, texts.length]);

  useEffect(() => {
    setText(texts[textIndex]);
  }, [textIndex, texts]); 
  

  const [currentImageTextIndex, setCurrentImageTextIndex] = useState(0);
// Arrow style
  const [arrowClicked, setArrowClicked] = useState(false);
  const handleArrowClick = () => {
    setArrowClicked(true);
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section style={backgroundImageStyle}>
      <div
        style={overlayStyle}
      > 
    <Container>
      <Row>
      <Col md={5} className="my-col">
      <div className="slideshow">
      {/* <button className="slideshow-button" onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}>  </button> */}
      <div className="slideshow-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image${index === currentSlide ? ' active' : ''}`}
          />
        ))}
      </div>
      {/* <button className="slideshow-button" onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}> </button>*/}
    </div> 
    </Col>
         <Col md={7} className="my-col">
          <div>              
              <p style={{color: 'greenyellow', fontSize:'50px', marginTop:'12vh', marginLeft:'20vh', marginTop:'22vh'}}>Experience Nature the modern way </p>
              <hr className='hr-hero' /> 
              <p className='p-change'>{text}</p>                           
          </div>          
        </Col>
      </Row>
    </Container>
{/* arrow */}
    <div className={arrowClicked ? 'scroll-effect' : ''}>
      <div onClick={handleArrowClick} style={arrowStyle}></div>




    </div>

     
  </div>
    </section>
  );
}

export default HeroSection;
