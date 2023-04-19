import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from '../img/person1.jpeg';
import heroimg from '../img/heroimg.jpeg';
import './CardHero.css';

function CardHero() {
  const images = [person1, heroimg];
  const texts = [
    "Sustain. Innovate. Circulate",
    "Sustain. Innovate. Circulate",    
  ];

  return (
    <Carousel 
      className="hero-card hero-vh-style carousel-container-hero text-white" 
      indicators={false} 
      slide={false}
      interval={5000}  
      style={{
        backgroundColor:'#002600', 
        alignItems:'center', 
        justifyContent:'center', 
        color:'#ffffff', 
        fontSize:'14px',
      }}
      prevIcon={<span className="carousel-control-prev-icon" />}
      nextIcon={<span className="carousel-control-next-icon" />}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="card-container" style={{ position: "relative" }}>
            {index % 2 === 0 ? (
              <Card>  
                <Card.Img
                  variant="top"
                  src={image}
                  className="img-fluid"        
                />
              </Card>
            ) : (
              <p className='img-fluid img-text' style={{display:'flex', alignItems:'center', justifyContent:'center', width:'70%'}} >
                {texts[index]}
              </p>
            )}
            <div className="card-overlay"></div>
          </div>
        </Carousel.Item>
      ))}
     
    </Carousel>
  );
}

export default CardHero;
