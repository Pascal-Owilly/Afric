import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FooterCard from './FooterCard';

function Footer() {
  return (
    <footer className="" style={{backgroundColor:'purple', color:'white'}}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <h5 style={{color:'#ddd2d2'}}>Site Links</h5>
            <ul className="list-unstyled text-white text-muted">
              <li><Link className="list-unstyled text-white text-muted" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/home">Home</Link></li>
              <li><Link className="list-unstyled text-white text-muted" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/about">About Us</Link></li>
              <li><Link className="list-unstyled text-white text-muted" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/contact">Contact</Link></li>
              <li><Link className="list-unstyled text-white text-muted" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/team">Team</Link></li>
              <li><Link className="list-unstyled text-white text-muted" style={{textDecoration:'none', fontStyle:'italic'}}  onClick={() => window.scrollTo(0, 0)} to="/socialent">Social Enterprise</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5  style={{color:'#ddd2d2'}}>Disclaimer</h5>
            <p className="list-unstyled text-white text-muted">Welcome to our site! Our seaweed fertilizers are perfect for your agricultural needs, but we do recommend testing on a small scale before widespread use, as each plant species is unique. Please follow all instructions and safety precautions when using our products.</p>
          </Col>
          <Col md={4}>
            <h5 style={{color:'#ddd2d2'}}>Location</h5>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364476102313!2d36.801273917180545!3d-1.268124685200886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1637096543542!5m2!1sen!2ske"
              style={{width:"100%", height:"130px", border:'3px solid #cceeee'}}  
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <Row  style={{backgroundColor:'goldenrod'}}>
          <Col md={2} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
            <p style={{ color: 'black', fontWeight:'bold', textAlign:'center' }}>Mwani Africa &copy; 2023</p> 
          </Col> 
          <Col className='text-center' md={8} style={{ color: 'white', fontWeight:'bold', textAlign:'center' }} >
          </Col> 
          <Col md={2} classnName="mr-5">
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
    </footer>
  );
}

export default Footer;