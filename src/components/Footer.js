import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cimg2 from '../img/cimg2.jpeg';
import vid from '../vid/vid.mp4';

function Footer() {
  return (
    <footer>
      <div className="footer-section-1" style={{ backgroundColor: 'black' }}>
        <Container fluid>
          <Row className='text-white'>
            <Col md={4} className='mt-5'>
              <h4 className='text-success'>Explore</h4>
              <p>About us</p>
              <p>Contact Us</p>
            </Col>
            <Col md={4} className='mt-5'>
            <h4 className='text-success'>Site Links</h4>
              <p>Mission</p>
              <p>Vision</p>
              </Col>
            <Col md={4}>
              <video style={{ maxHeight: '300px',width: '100%', opacity: 1, padding:'1rem', borderRadius:'30px' }} controls>
                <source style={{ maxHeight: '300px',width: '100%', opacity: 1, padding:'1rem', borderRadius:'30px' }} src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-section-2" style={{ backgroundColor: 'green', opacity: 0.8, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container fluid>
          <Row>
            <Col md={4}>
            <h4 style={{ color: 'black', fontWeight:'200px' }}>Location</h4>
            <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476102313!2d36.801273917180545!3d-1.268124685200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637096543542!5m2!1sen!2ske"
       style={{width:"300", height:"150", border:'10px solid #cceeee'}}  
    
         allowfullscreen="" loading="lazy"></iframe>
        
            </Col>
            <Col md={8}>  
            <p style={{ color: 'white', fontWeight:'bold' }}></p>
           
              <p style={{ color: 'white' }}> <span style={{ color: 'black', fontWeight:'bold', fontSize:'1.2rem', textAlign:'center' }}><u>Disclaimer: </u></span>The information on this website is for general informational purposes only and should not be considered as professional advice.
               We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, 
               or availability with respect to the website. 
               In no event will we be liable for any loss or damage including without limitation,
                indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            </Col>
           <a href='/#'> <p style={{textAlign:'right', color:'white',fontSize:'2rem', fontWeight:'700', border:'3px solid black', width:'3rem', textAlign:'center', float:'right'}}>&#8593;</p> </a>
          </Row>
          <Row >
            <Col md={12} style={{ color: 'white', fontWeight:'bold', textAlign:'center', backgroundColor:'black' }} >
            <p style={{ color: 'white', fontWeight:'bold', textAlign:'center', backgroundColor:'#000' }}>Mwani Africa &copy; 2023</p>
        
            </Col>
            
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
