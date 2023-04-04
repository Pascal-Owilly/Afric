import React from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardHero.css";
import img1 from '../img/heroimg5.jpeg';
import img2 from '../img/cardimg.jpeg';
import img3 from '../img/cardimg31.jpeg';
import img4 from '../img/img4.jpeg';
import img9 from '../img/img9.jpeg';
import img8 from '../img/how7.jpeg';
import cimg1 from '../img/c-img1.jpeg';
const images = [img1, img2, img2, img3, img4,img9, img8, cimg1];

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
    <Container className='container-for-hero-card '>
      <Row>
        <Col md={3} className='c-only'>
        <Card style={{width:'100%', margin:'auto'}} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={cimg1}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                Adipsing Connectur
                </Card.Footer>
              </Card>
        </Col>
        <Col md={3} className='p-only'>
        <Carousel className="hero-card" indicators={true}>
        {cardsData.map((card, index) => (
          <Carousel.Item key={index}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Card style={{width:'100%', margin:'auto'}} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={card.image} className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text">{card.text}</div>
                <Card.Footer className='footer-text-card bg-light'>
                  {card.title}
                </Card.Footer>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
        </Col>
        <Col md={3} className='c-only '>
        <Card style={{width:'100%', margin:'auto'}} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={img9}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                 Musulo Vuloriti
                </Card.Footer>
              </Card>
        </Col>
        <Col md={3} className='c-only c-only-1'>
        <Card style={{width:'100%', margin:'auto'}} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={img8}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                 Medihol Navilu
                </Card.Footer>
              </Card>
        </Col>
     

      </Row>
    </Container>
  );
}

export default CardsHero;
