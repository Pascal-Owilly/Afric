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
const images = [img1, img2, img2, img3, img4,img9, img8, cimg1, person2, img6, person1, img5, cimg3];

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
    <Container fluid className='container-for-hero-car container-card-section' style={{}}>
      <div className="hero-overlay" style={{marginTop: 0}}></div>
      <Row className="hero-card-row" style={{marginTop:'-15vh'}}>
        <Col md={3} className='c-only'>
        <Card style={{width:'100%', margin:'auto',position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={cimg1}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                Adipsing Connectur
                </Card.Footer>
              </Card>
        </Col>
        <Col md={3} className='p-only'>
        
        <Carousel className="hero-card hero-card-controls" style={{top:0}} indicators={false}>
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
        <Card style={{width:'100%', margin:'auto', position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={img9}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                 Musulo Vuloriti
                </Card.Footer>
              </Card>
        </Col>
        <Col md={3} className='c-only c-only-1'>
        <Card style={{width:'100%', margin:'auto', position: 'relative', zIndex: 1 }} className="carousel-card carousel-card-for-hero-card">
                <Card.Img variant="top" src={img8}  className="rounded-circle rounded-circle-hero-card" />
                <div className="card-text"></div>
                <Card.Footer className='footer-text-card bg-light'>
                 Medihol Navilu
                </Card.Footer>
              </Card>
        </Col>
        <Row className='welcome-row' style={{zIndex: 1, color:'#ffffff'}}>
        <h1 className="text-center welcome-h1">Welcome to Mwani Africa</h1>
            <p className="text-center mt-3" style={{fontSize:'16px' , lineHeight:'26px'}}>Mwani Africa, is a social enterprise that offers Seaweed farms as-a-service to smallholder farmers, mostly women and youth, to undertake sustainable and climate resilient seaweed farming, leveraging innovation to produce biostimulant soil conditioner, and other value-added products, all year round.  </p>
            <Col md={8} className="welcome-content">
            <img className=" rounded" src={person1} style={{width:'100%'}} />
            </Col>     
          <Col md={4} className="welcome-section welcome-content" >
          <div className="welcome-c">
            
          <img src={img6} className="rounded  welcome-image" style={{width:'100%',font: '600 40px/48px "Philosopher",sans-serif'}} />
          <p className="" style={{}}>Lorem ipsum dollor sit amet consecetuour</p>
          </div>
          <div className="welcome-c">
           
          <img src={img5} className="rounded welcome-image " style={{width:'100%',font: '600 40px/48px "Philosopher",sans-serif'}} />

          </div>
         </Col>
                    
        </Row>    
      </Row>     
    </Container>
  );
}

export default CardsHero;