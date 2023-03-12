import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import img6 from '../img/img6.jpeg';
import plant4 from '../img/plant4.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import './Why.css';
import vid from '../vid/vid.mp4';
import ReactPlayer from "react-player";

const images = [img6, plant4, plant2, plant3];

const MySection = () => {
  const [showMore, setShowMore] = useState(false);
  const cardsToShow = showMore ? images.length : 2;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    <Container fluid style={{maxHeight:'200vh', position:'relative'}}>
      <hr /><br />
      <Row className="what text-end " >
        <Col md={6}>

        <h3 className='text-start ' style={{ color: '#111', fontSize: '1.5rem', marginLeft:'2rem' }}>Organic Seaweed Fertilizers for Healthier Plants and a Greener Planet</h3>     
     <hr />
     <Card className="what-card">  <Image className="rounded-circle" src={img6} fluid /> </Card>
     
        </Col>
        <Col md={6}>
          <h5 className="mt-1 text-center">Why We Need Seaweed <br /> Fertilizers</h5>
          
    
        {images.slice(0, cardsToShow).map((img, index) => (
            <Card key={index} className="what-card text-start"><p>They are sustainably sourced and provides essential nutrients to plants, promoting healthy growth and stronger roots.</p></Card>
          ))}
          {cardsToShow < images.length && (
            <Button style={{align:'right', fontWeight:'bold', backgroundColor:'purple', marginRight:'1rem'}} variant="outline-success" className="mt-1 btn-sm text-white" onClick={toggleShowMore}>Read More</Button>
          )}
        </Col>  
      </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
