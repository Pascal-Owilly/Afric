import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img5 from '../img/img5.jpeg';
import img1 from '../img/img1.jpeg';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import img2 from '../img/img2.jpeg';
import img4 from '../img/img4.jpeg';
import cimg1 from '../img/cimg1.jpeg';
import cimg5 from '../img/cimg5.jpeg';
import cimg6 from '../img/cimg6.jpeg';
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
      className="hero-card hero-vh-style carousel-container-hero bg-dark text-white" 
      indicators={false} 
      fade={true} 
      interval={3000} 
      transition={'zoom'} 
      style={{
        backgroundColor:'rgb(255, 255, 255)', 
        alignItems:'center', 
        justifyContent:'center', 
        color:'#666666', 
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
