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
import person2 from '../img/person2.jpeg';
import person1 from '../img/person1.jpeg';
import img6 from '../img/img6.jpeg';
import img5 from '../img/img5.jpeg';
import cimg3 from '../img/cimg3.jpeg';
import cardimg from '../img/cardimg.jpeg';
import img12 from '../img/img12.jpeg';
import img11 from '../img/img11.jpeg';
import plant5 from '../img/plant5.jpeg';
import how7 from '../img/how7.jpeg';
import teambg from '../img/teambg.jpeg';
import person3 from '../img/person3.jpeg'
import how2 from '../img/how2.jpeg';
const images = [img1, img2, img2, img3, img4, img9, img8, cimg1, person2,person3, img6, person1, img5, cimg3, img12, teambg, person3, how2, img11, cardimg];

const cardsData = [
  {
    image: img4,
    title: "",
  },
  {
    image: img2,
    title: "",
  },
  {
    image: img1,
    title: "",
  },
  {
    image: img3,
    title: "",
  },
];

const CardsHero = () => {
  return (
    <Container fluid className=' container-card-section' >
      <div className="hero-overlay" style={{ marginTop: 0 }}></div>
      <Row className="hero-card-row" style={{ marginTop: '-8vh' }}>
        <Col md={3} className='c-only'>
          <Card style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
            <Card.Img variant="top" src={cimg1} className="rounded-circle rounded-circle-hero-card" style={{marginTop:'-3vh', width:'70%', margin:'auto', padding:'10px'}} />
            <div className="card-text"></div>

          </Card>
        </Col>
        <Col md={3} className=''>

          <Carousel className="hero-card hero-card-controls" style={{ top: 0, zIndex:1 }} slide={true} interval={3000} indicators={false}>
            {cardsData.map((card, index) => (
              <Carousel.Item key={index}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Card style={{ width: '100%', margin: 'auto'}} className="carousel-card carousel-card-for-hero-card">
                    <Card.Img style={{marginTop:'-3vh', width:'70%', margin:'auto', padding:'10px'}} variant="top" src={card.image} className="rounded-circle rounded-circle-hero-card" />
                    <div className="card-text">{card.text}</div>

                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

        </Col>
        <Col md={3} className='c-only '>
          <Card style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
            <Card.Img style={{marginTop:'-3vh', width:'70%', margin:'auto', padding:'10px'}} variant="top" src={img9} className="rounded-circle rounded-circle-hero-card" />
            <div className="card-text"></div>
          </Card>
          </Col>
        <Col md={3} className='c-only c-only-1'>
          <Card style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
            <Card.Img style={{marginTop:'-3vh', width:'70%', margin:'auto', padding:'10px'}} variant="top" src={img8} className="rounded-circle rounded-circle-hero-card" />
            <div className="card-text"></div>

          </Card>
        </Col>
        <Row className='welcome-row mt-5' style={{ zIndex: 1, color: '#ffffff' }}>
          {/* <h1 className="text-center welcome-h1"></h1> */}
          <p className="text-center mt-1" style={{ fontSize: '16px', lineHeight: '26px' }}>At Mwani Africa we cultivate local species of Seaweed on low-impact 
          ocean farms in partnership with coastal First Nations. Then we use that Seaweed to manufacture products for crop and cattle farmers addressing two global challenges:
           &nbsp; <i><b>Food Security and Climate Change. </b></i></p>
      
        </Row>

          <Row>
          </Row>
        
      </Row>
    </Container>
  )
}

export default CardsHero;