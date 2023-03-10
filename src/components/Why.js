import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import img6 from '../img/img6.jpeg';
import plant4 from '../img/plant4.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import './Why.css';
import vid from '../vid/vid.mp4';
import ReactPlayer from "react-player";

const images = [img6, plant4, plant2, plant3]

const MySection = () => {
  return (
    <>
    <Container fluid style={{maxHeight:'200vh', position:'relative'}}>
      <Row className="what">
        <Col md={6}>

        <h3 className=' ' style={{ color: '#111', fontSize: '1.5rem', marginLeft:'2rem' }}>Organic Seaweed Fertilizers for Healthier Plants and a Greener Planet</h3>     
     <hr />
     <Card className="what-card">  <Image className="rounded-circle" src={img6} fluid /> </Card>
     
        </Col>
        <Col md={3}>
          <h4 className="mt-5">Why We Need Seaweed Fertilizers</h4>
        <Card className="what-card"><p>They are sustainably sourced and provides essential nutrients to plants, promoting healthy growth and stronger roots.</p></Card>
        <Card className="what-card">  <p>Rich in essential minerals and plant growth hormones that promote plant growth, enhance the plant's ability to withstand environmental stresses and boost crop yields.</p></Card>
        <Card className="what-card">     <p>Easy to apply, can be used on various crops and plants, and are safe for the environment and human health.</p></Card>
    
         </Col>
      <Col md={3} className='' style={{marginTop:'18vh'}}>
      <Card className="what-card">   <p>Can improve the soil structure and soil microbial activity, thus promoting healthy root growth and nutrient uptake by plants.</p></Card>
                   <Card className="what-card">  <p>Organic seaweed fertilizers can reduce the need for synthetic fertilizers, which can be costly, harmful to the environment, and can lead to soil degradation and water pollution.</p></Card>
      </Col>
            </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
