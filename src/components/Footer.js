import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cimg2 from '../img/cimg2.jpeg';
import vid from '../vid/vid.mp4';

function Footer() {
  return (
    <footer>

      <div className="footer-section-2" style={{ backgroundColor: 'purple', opacity: 1}}>
        <Container fluid> 
          <Row >
            <Col md={4} className='mt-3'>
            <h4 style={{ color: '#ffffff', fontWeight:'200px', fontFamily:'verdana' }}>Location</h4>
            <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476102313!2d36.801273917180545!3d-1.268124685200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637096543542!5m2!1sen!2ske"
       style={{width:"100%", height:"250px", border:'10px solid #cceeee'}}  
    
         allowFullScreen="" loading="lazy"></iframe>
        
            </Col>
            <Col md={8} className='mt-3'>  
            
           
              <p style={{ color: 'white' }}> <span style={{ color: '#ffffff', fontWeight:'bold', fontSize:'1.2rem', textAlign:'center' }}>Disclaimer: </span>The information on this website is for general informational purposes only and should not be considered as professional advice.
               We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, 
               or availability with respect to the website. 
               In no event will we be liable for any loss or damage including without limitation,
                indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            </Col>
           <a href='/#top'> <p style={{textAlign:'right', color:'white',fontSize:'2rem', fontWeight:'700', border:'2px solid #f9f9f9', width:'2rem', textAlign:'center', float:'right'}}>&#8593;</p> </a>
          </Row>
          <Row style={{backgroundColor:'gold'}}>
            <Col md={12} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
            <p style={{ color: 'black', fontWeight:'bold', textAlign:'center' }}>Mwani Africa &copy; 2023</p> 
            </Col>           
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
