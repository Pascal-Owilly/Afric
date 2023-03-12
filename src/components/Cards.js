import React from 'react';
import bground1 from '../img/bground1.webp';
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
        <Container fluid className='section-style'>
          <Row>
            <Col md={4}  className=''>
            <h1 className='mb-2 mt-2' style={{ color: '#fff', fontSize: '1.7rem', marginLeft:'2rem', overflow:'hidden', fontFamily:'sans' }}>Who we Are</h1>     
              <img src={person1} alt="Mwani Africa" style={{ width: '100%' }} />
              <hr style={{color:'#fff'}}/>
                            </Col>
    
          <Col md={8}  className=''>
          <hr style={{color:'#fff'}}/>
          <p className='' style={{ color: '#fff', fontSize: '18px' }}>
               We are Mwani Africa, a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.
                Mwani Africa's social enterprise leverages the Seaweed 
                value-addition, to facilitate local small holder communities cultivate Seaweed. 
                Empowering mostly women and youth. We brought together stakeholders, including Government,
                Academia and private sector and resolved to form a Seaweed association;
                Mwani Africa is formulating the constitution and framework. </p>
                <div>
                <Carousel className="mt-5 carousel-card border-0" indicators={false} controls={false} interval={2000}>
                  {text.map((texts, index) => (
                    <Carousel.Item key={index}>
                      <div className="card-container" style={{ position: 'relative' }}>
                        <Card
                          className="text-center"
                          style={{
                            backgroundColor: '#5a015a',
                            width: '40%',
                            height: '100%',
                            alignItems: 'center',
                            color: 'white',
                            marginLeft: '25%',
                            fontFamily:'verdana',
                            marginBottom:'1.5rem',
                            fontSize:'24px',
                            padding:'0'
                          }}
                        >
                          <Card variant="bottom" src={texts[0]} className="img-fluid" />
                          <p style={{marginTop:'0', marginBottom:'0', height:'4vh'}}>{texts[1]}</p>
                          <p>{texts[2]}</p>
                        </Card>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>



                </div>
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
          backgroundColor: '#111',
          opacity: 0.9,
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default CardSection;
