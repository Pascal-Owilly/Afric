import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import cardimg2 from '../img/cardimg2.jpeg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Row style={{backgroundColor:'#ffffff'}}>
        <Col md={9}>
          <Card
          
             style={{
              // backgroundImage: `linear-gradient(rgba(0, 38,0,0.8), rgba(0, 38,0,0.8)), url(${cardimg2})`,
              // backgroundSize: "cover",
              color: "#666666",

             
            }}
          >
            <Card.Body style={{ height: "100vh"}}>
              <Card.Title className="text-center mb-4 welcome-h1"             
              style={{
              backgroundImage: `linear-gradient(rgba(0, 38,0,0.8), rgba(0, 38,0,0.8)), url(${cardimg2})`,
              backgroundSize: "cover",
              color: "#fff",
              marginTop:'15vh',
            }}>Welcome to Mwani Africa</Card.Title>
              <Card.Text >
                
               <p style={{ fontSize: '16px', lineHeight: '20px' }}>Mwani Africa is a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.

Mwani Africa's social enterprise leverages the Seaweed value-addition, to facilitate local small holder communities cultivate Seaweed. Empowering mostly women and youth. We brought together stakeholders, including Government, Academia and private sector and resolved to form a Seaweed association; Mwani Africa is formulating the constitution and framework.</p>

              </Card.Text>
              </Card.Body>
              </Card>
        </Col>
        <Col md={3}>
          <Row style={{marginTop:'10vh'}}>
            <Col>
            <Card className="what-card mt-3" style={{marginRight:'1rem'}}>  
     
              <h3 className='welcome-h3' style={{color:'#666666', textAlign:'left'}}>Mission</h3>
              <p style={{ fontSize: '16px', lineHeight: '22px' }}>
              Responsibly enhance healthy plants and soil while protecting the planet.
              </p>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col>
            <Card className="what-card mt-2" style={{marginRight:'1rem'}}>  
              <h3 className='welcome-h3' style={{color:'#666666', textAlign:'left'}}>Vision</h3>
              <p style={{ fontSize: '16px', lineHeight: '22px' }}>
              A Social enterprise enhancing livelihoods; providing the most efficient healthy plants and soil solution; making the planet better.

 
              </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
