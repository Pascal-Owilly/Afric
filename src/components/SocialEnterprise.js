import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import how7 from '../img/how7.jpeg';
import img14 from '../img/img14.jpeg';
import person1 from '../img/person1.jpeg';
import cimg2 from '../img/cimg2.jpeg';
import cimg6 from '../img/cimg6.jpeg';
import img3 from '../img/img3.jpeg';
import img2 from '../img/img2.jpeg';
import img6 from '../img/img6.jpeg';
import './SocialEnterprise.css';
import 'animate.css';

const images = [ img14, how7, person1];

const MySection = () => {


  return (
    <>
    <hr />
       <Container style={{height:'100%', position:'relative', marginTop:'16vh'}}>
      <Row className="enterprise mt-4">
        <Col className="enterprise " md={4}>
          <img src={img14} style={{width:'100%'}}/>
        </Col>
        <Col className="enterprise " md={4}>
          <img src={cimg6} style={{width:'100%'}}/>
        </Col>
        <Col className=" " md={4}>
          
          <img className="pb-1" src={cimg2} style={{width:'100%'}}/>
        </Col>
        <Container>
        <Row>
        <Col className="enterprise " md={4}>
          <img src={img2} style={{width:'100%'}}/>
        </Col>
        <Col className="enterprise" md={4}>
          <img src={img3} style={{width:'100%'}}/>
        </Col>
        <Col className="enterprise" md={4}>
          <img src={img6} style={{width:'100%'}}/>
        </Col>
        </Row>
     
        </Container>
      </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
