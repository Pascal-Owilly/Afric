import React, { useState } from 'react';
import './Cards.css';
import { Container, Row, Col } from 'react-bootstrap';

function Card() {
  console.log('Card component rendered');

  return (
    <>
  <Container>
    <Row>
      <Col md={6}>
        <div className="wrap animate pop">
          <div className="overlay">
            <div class="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Trees</h1>
              <p className="animate slide-left pop delay-5" style={{color: 'white', marginBottom: '2.5rem'}}>Kingdom: <em>Plantae</em></p>
          </div>
          
          <div className="image-content1 animate slide delay-5"></div>
              <div className="dots animate">
                <div className="dot animate slide-up delay-6"></div>
                <div className="dot animate slide-up delay-7"></div>
                <div className="dot animate slide-up delay-8"></div>
          </div>
          </div>
            <div className="text">
              <p>Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
              <p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
              <p>When managed properly, trees are a good source of renewable energy and construction material.</p>
          </div>
      </div>
      </Col>
      <Col md={6}>
        <div className="wrap animate pop">
          <div className="overlay">
            <div class="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Trees</h1>
              <p className="animate slide-left pop delay-5" style={{color: 'white', marginBottom: '2.5rem'}}>Kingdom: <em>Plantae</em></p>
          </div>
          <div className="image-content2 animate slide delay-5"></div>
              <div className="dots animate">
                <div className="dot animate slide-up delay-6"></div>
                <div className="dot animate slide-up delay-7"></div>
                <div className="dot animate slide-up delay-8"></div>
          </div>
          </div>
            <div className="text">
              <p>Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
              <p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
              <p>When managed properly, trees are a good source of renewable energy and construction material.</p>
          </div>
      </div>
      </Col>



      
    </Row>
  </Container>
    </>
  );
};

export default Card;
