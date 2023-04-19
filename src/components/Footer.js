import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FooterCard from './FooterCard';
import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/subscriptions/', { email })
      .then((response) => {
        console.log('Form submitted successfully:', response);
        alert('Thanks for subscribing!');
      })
      .catch((error) => {
        console.error('Form submission failed:', error);
        alert('Oop!, try again after sometime');
      });
  };
  return (
    <>
   
    <footer className="footer-content">
    <div className='footer-overlay'></div>
      <Container className='footer-container' fluid >
        <Row >
          <Col md={4} className='mt-4'>
            <h4 >Site Links</h4>
            <ul className="list-unstyled text-white ">
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic', zIndex:2}}  onClick={() => window.scrollTo(0, 0)} to="/home">Home</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/about">About Us</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/contact">Contact</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/team">Team</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/socialent">Social Enterprise</Link></li>
            </ul>
          </Col>
          <Col md={4} className='mt-4'>
            <h4  style={{color:'#ddd2d2'}}>Disclaimer</h4 >
            <p className="list-unstyled text-white">Welcome to our site! Our seaweed fertilizers are perfect for your agricultural needs, but we do recommend testing on a small scale before widespread use, as each plant species is unique. Please follow all instructions and safety precautions when using our products.</p>
          </Col>
          <Col md={4 } className='mt-4'>

                <Card className='subscription-card'>
                <Card.Body>
                  <Card.Title className='subscription-title'>Sign Up For Newsletter</Card.Title>
                  <Card.Text className='subscription-title'></Card.Text>
                  <Form className='subscription-email' onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control className='sub-input' type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                      <Form.Text className="text-muted">
                       
                      </Form.Text>
                    </Form.Group>
                    <Button className='sub-btn' variant="danger" type="submit">
                      Subscribe
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        <hr />
        <Row  style={{backgroundColor:'black', padding:'1rem'}}>
        
          <Col md={4} style={{ color: 'white', fontWeight:'bold', textAlign:'' }} >
            <p className='mt-1' style={{ color: '#fff', fontWeight:'bold', textAlign:'left', fontSize:'16px' }}>Mwani Africa &copy; 2023</p> 
          </Col> 
          <Col className='text-center' md={4} style={{ color: 'white', fontWeight:'bold', textAlign:'right' }} >
          </Col> 
          <Col md={4} classnName="text-right">
            <FooterCard
              name="Pascal Owilly"
              position="Software Developer"
              image="dev.png"
              linkedin="https://www.linkedin.com/in/pascal-owilly-1964aa114"
              github="https://pascal-owilly.github.io/My-Portfolio/portfolio.html"
            />

            </Col>           
          </Row>    
      </Container>
    </footer>
    </>
  );
}

export default Footer;
