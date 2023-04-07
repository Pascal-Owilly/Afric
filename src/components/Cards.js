import React from 'react';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import person3 from '../img/person3.jpeg';
import img8 from '../img/img8.jpeg';
import img9 from '../img/img9.jpeg';
import img10 from '../img/img10.jpeg';
import img11 from '../img/img11.jpeg';
import img12 from '../img/img12.jpeg';
import img14 from '../img/img14.jpeg';
import img15 from '../img/img15.jpeg';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Cards.css';
import 'animate.css';

const text = [
  ['', 'SUSTAIN'],
  ['', 'INNOVATE'],
  ['', 'CIRCULATE'],
];

const CardSection = () => {
  return (
    <section
      style={{

        height: 'auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container className='section-style'>
      
          <Row>
             
           
          <Col md={12}  className='mt-5 text-center fade-in'>
          <h1 className='mt-2 animate__animated animate__bounce' style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'2rem' }}>Welcome to Mwani Africa</h1>           
           
                <div>
                 
                </div>
            </Col>   
            <Col md={4}  className=''>
            
                <img className='mt-5' src={person1} alt="Mwani Africa" style={{ width: '100%' }} />
              
                           

                </Col>
    
          </Row>
         
        </Container>  
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            boxSizing: 'border-box',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
          }}
        >

        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(86, 51, 211)',
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default CardSection;
