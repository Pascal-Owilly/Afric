import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import "./SlideComponent.css";
import img1 from '../img/heroimg5.jpeg';
import img2 from '../img/cardimg.jpeg';
import img3 from '../img/cardimg2.jpeg';
import img4 from '../img/cardimg3.jpeg';
import how7 from '../img/how7.jpeg';



const images = [img1, img2, img2,
  img3,
  img4]
const cardsData = [

  {
    image: img4,
    title: "Lorem Ipsum",
  },
  {
    image: img2,
    title: "Dollar Sit Amet",
  },
  {
    image: img1,
    title: "Adipsing",
  },
  {   
   image: img3,
    title: "Consetour",
  },
];



const CardsHero = () => {
  

  return (
    <Container className='container-for-hero-card'>
      <Row>
      <Carousel className="mt-0 carousel-card border-0" indicators={false} controls={false} interval={2000}>
                  {images.map((images, index) => (
                    <Carousel.Item key={index}>
                      <div className="card-container" style={{ position: 'relative' }}>
                        <Card
                          className="text-center"
                          style={{
                            backgroundColor: 'transparent',
                        
                            alignItems: 'center',
                            color: 'white',
                            border:'none',
                            fontFamily:'arial ',
                            marginBottom:'0',
                            fontSize:'18px',
                            padding:'0'
                          }}
                        >
                          <Card variant="bottom" src={images[0]} className="img-fluid" />
                          <p>{images}</p>
                        </Card>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
                </Row>
      </Container>
);
};

export default CardsHero;