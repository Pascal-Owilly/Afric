import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import './CardHero.css';
import './Hero.css';

function CardHero() {
  const images = [person2, person1];
  const texts = [
    "Sustain. Innovate. Circulate",
    "Sustain. Innovate. Circulate",    
  ];

  return (
    <Carousel 
      className="hero-card hero-vh-style carousel-container-hero text-white" 
      indicators={false} 
      slide={false}
      interval={90000}  
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
            {index % 2 === 0 ? 
            (
              <div className='hero-img-bg' style={{height:'auto'}}>
              <h1 className='img-text m-2' style={{display:'flex', alignItems:'center', justifyContent:'center', height:'20vh'}}>Climate change is the most important issue of our time.</h1>
              <p className='img-fluid img-text' style={{display:'flex', width:'80%', margin:'auto'}} >
              Climate change is the most important issue of our time and it is negatively impacting how much food we can produce for a continuously growing population. Luckily solutions are within reach.
                {/* {texts[index]} */}
              </p>    
              </div>
            )
            : 
            (
              <Card>  
                <Card.Img
                  variant="top"
                  src={image}
                  className="img-fluid"        
                />
              </Card>
            ) 
            }
            <div className="card-overlay"></div>
          </div>
        </Carousel.Item>
      ))}
     
    </Carousel>
  );
}

export default CardHero;
