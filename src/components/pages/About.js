import React from 'react';
import bground1 from '../../img/bground1.webp';
import person1 from '../../img/person1.jpeg';
import person2 from '../../img/person2.jpeg';
import person3 from '../../img/person3.jpeg';
import img7 from '../../img/img7.jpeg'
import plant2 from '../../img/plant2.jpeg'
import img8 from '../../img/img8.jpeg';
import img3 from '../../img/img3.jpeg';
import img9 from '../../img/img9.jpeg';
import img10 from '../../img/img10.jpeg';
import img11 from '../../img/img11.jpeg';
import img12 from '../../img/img12.jpeg';
import img14 from '../../img/img14.jpeg';
import img15 from '../../img/img15.jpeg';
import how7 from '../../img/how7.jpeg';
import how2 from '../../img/how2.jpeg';
import how1 from '../../img/how1.jpeg';
import vid from '../../vid/vid.mp4';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Section = () => {
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
            <Col md={3}  className='mt-5'>
            <h1 className='mb-5 ' style={{ color: '#fff', fontSize: '2rem', marginLeft:'2rem' }}>Why We Do It</h1>     
              <img className='rounded-circle' src={how7} alt="Mwani Africa" style={{ width: '100%', height: '300px' }} />
            <p style={{ color: 'green', fontSize: '1rem', marginLeft:'2rem' }}><span style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'0' }}><u>To save the planet</u></span> &nbsp; It is natural and organic: Seaweed fertilizer is a natural and organic alternative to synthetic fertilizers, which can be harmful to the environment and can cause soil degradation.</p>
       
            </Col>
            
          <Col md={3}  className='mt-4'>  
          <p style={{ color: 'green', fontSize: '1rem', marginLeft:'2rem' }}><span style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'0' }}><u>To improve soil health</u></span> &nbsp; Seaweed fertilizer helps improve soil health by increasing soil organic matter, improving soil structure, and increasing soil moisture retention.</p>  
              <img className='rounded' src={how2} alt="Mwani Africa" style={{ width: '350px' ,height:'300px' }} />
       
            </Col>
            <Col md={3}  className='mt-5'>     
              <img className='rounded-circle' src={how1} alt="Mwani Africa" style={{ width: '100%', height: '300px' }} />
              <p style={{ color: 'green', fontSize: '1rem', marginLeft:'2rem' }}><span style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'0' }}><u>To enhance crop quality</u></span> &nbsp; Seaweed fertilizer is known to enhance the quality of crops by increasing the sugar content, improving the taste and flavor, and enhancing the color and appearance of fruits and vegetables.</p>
       
            </Col>
            
          <Col md={3}  className='mt-4'>    
          <p style={{ color: 'green', fontSize: '1rem', marginLeft:'2rem' }}><span style={{ color: '#fff', fontSize: '1.5rem', marginLeft:'0' }}><u>To boost plant growth and productivity</u></span> &nbsp;  Seaweed fertilizer is known to stimulate plant growth and productivity by providing essential nutrients and trace elements that are necessary for healthy plant growth. </p>
              <img className='rounded' src={plant2} alt="Mwani Africa" style={{ width: '100%' ,height:'50%' }} />
       
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

export default Section;
