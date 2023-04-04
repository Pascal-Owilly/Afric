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
             
           
          <Col md={8}  className='mt-5 fade-in'>
          <h1 className='mt-2 animate__animated animate__bounce' style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'2rem' }}>Who We Are</h1>           
          <p className='pt-0' style={{ color: '#fff', fontSize: '18px', fontFamily:'sanSerif' }}>
               We are Mwani Africa, a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.
                Mwani Africa's social enterprise leverages the Seaweed 
                value-addition, to facilitate local small holder communities cultivate Seaweed. 
                Empowering mostly women and youth. We brought together stakeholders, including Government,
                Academia and private sector and resolved to form a Seaweed association;
                Mwani Africa is formulating the constitution and framework. </p>
           
                <div>
                  <Carousel className="mt-0 carousel-card border-0" indicators={false} controls={false} interval={2000}>
                  {text.map((texts, index) => (
                    <Carousel.Item key={index}>
                      <div className="card-container" style={{ position: 'relative' }}>
                        <Card
                          className="text-center"
                          style={{
                            backgroundColor: 'transparent',
                        
                            alignItems: 'center',
                            color: 'white',
                            border:'none',
                            fontFamily:'arial ',
                            marginBottom:'0',
                            fontSize:'18px',
                            padding:'0'
                          }}
                        >
                          <Card variant="bottom" src={texts[0]} className="img-fluid" />
                          <p style={{marginTop:'0', marginBottom:'0', height:'1.1rem'}}>{texts[1]}</p>
                          <p>{texts[2]}</p>
                        </Card>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
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
