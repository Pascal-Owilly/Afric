import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import img6 from '../img/img6.jpeg';
import plant4 from '../img/plant4.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import './Why.css';


const images = [img6, plant4, plant2, plant3];

const MySection = () => {
  const [showMore, setShowMore] = useState(false);
  const cardsToShow = showMore ? images.length : 1;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    <hr />
       <Container style={{maxHeight:'200vh', position:'relative'}}>
      <Row className="what">
        <Col md={6}>

        <h3 className=' ' style={{ color: '#111', fontSize: '1.5rem', marginLeft:'0' }}>Organic Seaweed Fertilizers for Healthier Plants and a Greener Planet</h3>     
     <hr />
     <Card className="what-card">  <Image className="rounded-circle" src={img6} fluid /> </Card>
     
        </Col>
        <Col md={4}>
          <h4 className="mt-0">Why We Need Seaweed Fertilizers</h4>
           <Card className="what-card mt-2">  <p>Rich in essential minerals and plant growth hormones that promote plant growth, enhance the plant's ability to withstand environmental stresses and boost crop yields.</p></Card>
        <Card className="what-card mt-2">     <p>Easy to apply, can be used on various crops and plants, and are safe for the environment and human health.</p></Card>
        {images.slice(0, cardsToShow).map((img, index) => (
        <Card key={index} className="what-card mt-2">   <p>Can improve the soil structure and soil microbial activity, thus promoting healthy root growth and nutrient uptake by plants.</p></Card>
        ))}
                  {cardsToShow < images.length && (
            <Button style={{align:'right', fontWeight:'bold', backgroundColor:'transparent', marginRight:'1rem', float:'right'}} variant="outline-success" className="mt-1 btn-sm text-dark" onClick={toggleShowMore}>Read More</Button>
          )}
         </Col>
          
                  

      <Col md={3} className='' style={{marginTop:'0'}}>

        </Col>  
      </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
