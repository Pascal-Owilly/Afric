import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import img6 from '../img/img6.jpeg';
import plant4 from '../img/plant4.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import './Why.css';


const images = [img6, plant4, plant2, plant3]

const MySection = () => {
  return (
    <>
    <Container style={{maxHeight:'200vh', position:'relative'}}>
      <Row className="what">
        <Col md={8}>
<hr />
        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'2rem' }}>Organic Seaweed Fertilizers for Healthier Plants and a Greener Planet</h3>     
     <hr />
     <Card className="what-card">  <Image className="rounded-circle" src={img6} fluid /> </Card>
     
        </Col>
        <Col md={4}>
          <h4 className="mt-5 text-center">Why We Need Seaweed Fertilizers</h4>
        <Card className="what-card mt-1"><p>They are sustainably sourced and provides essential nutrients to plants, promoting healthy growth and stronger roots.</p></Card>
        <Card className="what-card mt-1">  <p>Can improve the soil structure and soil microbial activity, thus promoting healthy root growth and nutrient uptake by plants.</p></Card>
        <Card className="what-card mt-1">  <p>Organic seaweed fertilizers can reduce the need for synthetic fertilizers, which can be costly, harmful to the environment, and can lead to soil degradation and water pollution.</p></Card>
      </Col>
            </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
