import React, { useState } from 'react';
import bground1 from '../img/bground1.webp';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import person3 from '../img/person3.jpeg';
import img7 from '../img/img7.jpeg'
import plant2 from '../img/plant2.jpeg'
import img8 from '../img/img8.jpeg';
import img3 from '../img/img3.jpeg';
import img9 from '../img/img9.jpeg';
import img10 from '../img/img10.jpeg';
import img11 from '../img/img11.jpeg';
import img12 from '../img/img12.jpeg';
import img14 from '../img/img14.jpeg';
import img15 from '../img/img15.jpeg';
import how7 from '../img/how7.jpeg';
import how2 from '../img/how2.jpeg';
import how1 from '../img/how1.jpeg';
import vid from '../vid/vid.mp4';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section = () => {



  
  return (
    <section
      style={{
        backgroundImage: `url(${img7})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
         <Container fluid style={{height:'100vh'}}> 
        <Row >
          <Col md={7} className='mb-3' >
            <h1 className='mb-1' style={{ color: '#fff', fontSize: '2rem', marginLeft: '2rem' }}>
              Why We Do It
            </h1>
            <img className='rounded' src={img12} alt='Mwani Africa' style={{ width: '100%' }} />
          </Col>
          <Col md={5} className='' style={{margin:'auto'}}>
            <p style={{ color: 'green', fontSize: '1rem', marginLeft: '2rem' }}>
              <span style={{ color: '#fff', fontSize: '1rem', marginLeft: '0' }}>To boost plant growth and productivity</span>&nbsp;
              Seaweed fertilizer is known to stimulate plant growth and productivity by providing essential nutrients and trace elements that are necessary for healthy plant growth.
            </p>
            <p style={{ color: 'green', fontSize: '1rem', marginLeft: '2rem' }}>
              <span style={{ color: '#fff', fontSize: '1rem', marginLeft: '0' }}>To save the planet</span>&nbsp;
              It is natural and organic: Seaweed fertilizer is a natural and organic alternative to synthetic fertilizers, which can be harmful to the environment and can cause soil degradation.
            </p>
         
             
                  <p style={{ color: 'green', fontSize: '1rem', marginLeft: '2rem' }}>
                    <span style={{ color: '#fff', fontSize: '1rem', marginLeft: '0' }}>To improve soil health</span>&nbsp;
                    Seaweed fertilizer helps improve soil health by increasing soil organic matter, improving soil structure, and increasing soil moisture retention.
                  </p>
              
             


          </Col>
        </Row>
      </Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

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

export default Section;
