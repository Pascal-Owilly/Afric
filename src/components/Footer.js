
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterCard from './FooterCard';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-section-2" style={{ backgroundColor: 'purple', marginBottom:'0'}}>
          <Container fluid style={{ backgroundColor:'purple', height:'100%'}}> 
            <Row >
              <Col md={4} className='text-center mt-5'>
                <h5 className='text-center footer-links' style={{ color: '#999999', fontWeight:'200px', fontFamily:'verdana' }}>Site Map</h5>
                <ul>
                
                   <li className='mt-2 footer-links' style={{listStyleType:'none'}}>
                  <Link to='/' style={{textDecoration:'none', color: '#fff', cursor: 'pointer !important', zIndex:'2'}}>Home</Link></li>
                  <li className='mt-2 footer-links' style={{listStyleType:'none'}}>
                    <Link style={{textDecoration:'none', color: '#fff', cursor: 'pointer'}} to='/team'> Team Section </Link>
                  </li>
                  <li className='mt-2 footer-links' style={{listStyleType:'none'}}>
                    <Link style={{textDecoration:'none', color: '#fff', cursor: 'pointer'}} to='/socialent'>Social Enterprise</Link>
                  </li>
                  <li className='mt-2 footer-links' style={{listStyleType:'none'}}>
                    <Link classNmame='footer-links' style={{textDecoration:'none', color: '#fff', cursor: 'pointer'}} to='/contact'>Contact Us </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} className='mt-0'>   
                <h5 className='text-center' style={{ color: '#999999', fontWeight:'200px', fontFamily:'verdana' }}>Disclaimer</h5>
                <p className='text-white text-center'>The information on this website is for general informational purposes only and should not be considered as professional advice. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
              </Col>
              <Col md={4} className="mt-5">  <h5 className='text-center' style={{ color: '#999999', fontWeight:'200px', fontFamily:'verdana' }}>Location</h5>
 
            <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476102313!2d36.801273917180545!3d-1.268124685200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637096543542!5m2!1sen!2ske"
       style={{width:"98%", height:"30vh", border:'1px solid #cceeee'}}  
    
         allowFullScreen="" loading="lazy"></iframe> 
            </Col>
            </Row>
          <Row style={{backgroundColor:'goldenrod'}}>
          <Col md={2} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
          <p style={{ color: 'black', fontWeight:'bold', textAlign:'center' }}>Mwani Africa &copy; 2023</p> 
           
            </Col> 
            <Col className='text-center' md={8} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
            
            </Col> 
            <Col md={2} classnName="" style={{width:''}}>
            <FooterCard
              name="Pascal Owilly"
              position="Software Developer"
              image="dev.png"
              linkedin="https://www.linkedin.com/in/pascal-owilly-1964aa114"
              github="https://www.github.com/pascal-owilly"
            />

            </Col>           
          </Row>
        </Container>
      </div>    
     
    </footer>
    </>
  );
}

export default Footer;
