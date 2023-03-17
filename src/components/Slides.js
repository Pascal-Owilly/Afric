import React, { useState, useEffect } from "react";
import './Slides.css';
import {Col, Container, Row } from 'react-bootstrap'



const slides = [

];

const Slide = ({ slide }) => (
  <div className="slide">
    <img src={slide.img} alt={slide.title} />
    <div className="slide-title-container">
      <h2>{slide.title}</h2>
    </div>
    <div className="slide-footer">
      <p>{slide.title}</p>
    </div>
  </div>
);



const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <Container fluid >
      <h2 style={{fontFamily:'verdana'}}>The Team</h2>
      <hr />
        <Row>
        <Col>
        
    <div className="slides" style={{ borderRadius:'50%',height:'100vh', width:'35vh'}}>
      <div className="slider-round-card">
        <div
          className="slider-wrapper-round-card"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <Slide key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={currentSlide === index ? "dot active" : "dot"}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </div>
    </Col>
    </Row>
    </Container>
</>
  );
};

export default Slides;
