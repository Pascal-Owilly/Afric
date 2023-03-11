import React from 'react';
import bground1 from '../img/bground1.webp';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import person3 from '../img/person3.jpeg';
import img7 from '../img/img7.jpeg'
import img8 from '../img/img8.jpeg';
import img9 from '../img/img9.jpeg';
import img10 from '../img/img10.jpeg';
import img11 from '../img/img11.jpeg';
import img12 from '../img/img12.jpeg';
import img14 from '../img/img14.jpeg';
import img15 from '../img/img15.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

const CardSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img7})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container fluid>
          <Row>
            <Col md={4}  className=''>
            <h1 className='mb-5 ' style={{ color: '#fff', fontSize: '2rem', marginLeft:'2rem' }}>Who are we?</h1>     
              <img src={person1} alt="Mwani Africa" style={{ maxWidth: '100%' }} />
       
            </Col>
            <Col md={2} style={{marginTop:'25vh'}}>
            <p className='mt-4' style={{ color: '#fff', fontSize: '18px' }}>
            We are Mwani Africa. We provide circular zero-waste solution of Ocean co-products </p>
          </Col>
          <Col md={4}  className=''>
                 <img src={person2} alt="Mwani Africa" style={{ width: '100%', marginTop:'12rem'}} />       
            </Col>
            <Col md={2} style={{marginTop:'5vh'}}>
               <p style={{ color: '#fff', fontSize: '18px', marginTop:'26vh'  }}>
           We up-cycle to produce bio-stimulants and soil conditioner </p>
          </Col>
          <Col md={4}  className='mt-4'>    
              <img src={img9} alt="Mwani Africa" style={{ width: '100%' ,height:'70%' }} />
       
            </Col>
            <Col md={2} style={{marginTop:'11vh'}}>
            <p style={{ color: '#fff',fontSize: '18px'}}>
               We leverage the Seaweed value-addition to facilitate local small holder communities cultivate Seaweed </p>

          </Col>
          <Col md={6}  className='ml-5'>
          <p style={{ color: '#fff', fontSize: '18px', marginTop:'2vh', marginLeft:'0'  }}>
                 We empower women and youth. 
               </p>
               <img src={img14} alt="Mwani Africa" style={{ width: '100%', marginTop:'1rem' }} />
                       
            </Col>
            
          </Row>
          <p style={{ color: '#fff', fontSize: '18px', width:'100%', textAlign:'center'}}>We bring together stakeholders, Government, Academia and private sector and resolved to form a Seaweed association. We formulate the constitution and framework.</p>
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
