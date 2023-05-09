import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FooterCard from './FooterCard';
import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import img4 from '../img/img4.jpeg';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    axios.get(`http://contact-mail.mwani.africa/check-email/${email}`)
      .then((response) => {
        if (response.data.exists) {
          setSubscriptionStatus('already-subscribed');
        } else {
          axios.post('http://contact-mail.mwani.africa/subscribe/', { email })
            .then((response) => {
              console.log('Form submitted successfully:', response);
              setSubscriptionStatus('success');
              setEmail('');
            })
            .catch((error) => {
              console.error('Form submission failed:', error);
              setSubscriptionStatus('error');
              setEmail('');
            });
        }
      })
      .catch((error) => {
        console.error('Error checking email:', error);
        setSubscriptionStatus('error');
        setEmail('');
      });
  };
  

  return (
    <>

    <footer className="footer-content"
        style={{
          backgroundImage: `linear-gradient(rgba(0,38,0,0.7), rgba(0,38,0,0.7)), url(${img4})`,
          backgroundAttachment: "fixed",
          backgroundSize: "contain",
          color: "white",
        }}>
    <div className='footer-overla'></div>
      <Container className='footer-container' fluid >
        <Row >
          <Col md={4} className='mt-4'>
            <h4 >Site Links</h4>
            <ul className="list-unstyled text-white ">
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic', zIndex:2}}  onClick={() => window.scrollTo(0, 0)} to="/home">Home</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/about">About Us</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/contact">Contact</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/teampage">Team</Link></li>
              <li><Link className="list-unstyled text-white" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/socialent">Social Enterprise</Link></li>
            </ul>
          </Col>
          <Col md={4} className='mt-4'>
            <h4  style={{color:'#ddd2d2'}}>Disclaimer</h4 >
            <p className="list-unstyled text-white">Welcome to our site! Our seaweed fertilizers are perfect for your agricultural needs, but we do recommend testing on a small scale before widespread use, as each plant species is unique. Please follow all instructions and safety precautions when using our products.</p>
          </Col>
          <Col md={4 } className='mt-4'>
  
                <Card className='subscription-card'>
                {subscriptionStatus === 'success' && (
        <div style={{backgroundColor:'green', color:'white', fontWeight:'500', fontSize:'18px', borderRadius:'10px', border:'none', transition:'2s easeIn'}} className="alert alert-success text-center" role="alert">
          Subscription successful, thank you!
        </div>
      )}
      {subscriptionStatus === 'error' && (
        <div style={{backgroundColor:'transparent', color:'red', fontWeight:'500', fontSize:'18px', border:'none', transition:'2s easeIn'}} className="alert alert-danger text-center" role="alert">
          Oops!, that didn't work, try again
        </div>
)}
        {subscriptionStatus === 'already-subscribed' && (
          <div style={{backgroundColor:'green', color:'greenyellow', fontWeight:'500', fontSize:'18px', borderRadius:'10px', border:'none', transition:'2s easeIn'}} className="alert alert-warning text-center" role="alert">
            You are already subscribed with this email address!
          </div>
        
      )}  
                <Card.Body>
                  <Card.Title className='subscription-title'>Sign Up For Newsletter</Card.Title>
                  <Card.Text className='subscription-title'></Card.Text>
                  <Form className='subscription-email' onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label></Form.Label>
                      <Form.Control className='sub-input' type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                      <Form.Text className="text-muted">
                       
                      </Form.Text>
                    </Form.Group>
                    <Button className='sub-btn' style={{backgroundColor:'purple', color:'white', border:'none', fontWeight:'bold', letterSpacing:'2px'}} variant="danger" type="submit">
                      Subscribe
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        <hr />
        <Row  style={{backgroundColor:'purple', padding:'1rem'}}>
        
          <Col md={12} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
            <p className='mt-1' style={{ color: '#fff', fontWeight:'bold', fontSize:'18px' }}>Mwani Africa &copy; 2023</p> 
          </Col> 
          <Col className='text-center' md={4} style={{ color: 'white', fontWeight:'bold', textAlign:'right' }} >
          </Col> 
           
          </Row>    
      </Container>
    </footer>
    </>
  );
}

export default Footer;
