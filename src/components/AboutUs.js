import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import cardimg2 from '../img/cardimg2.jpeg';
import person3 from '../img/person3.jpeg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Container style={{marginTop:'20vh'}}>
        <h1 className="text-center .welcome-h1">Welcome to Mwani Africa</h1><hr />
      <Row style={{backgroundColor:'#ffffff'}}>
        <Col md={5}>                      
 <img src={person3} style={{width:'100%'}}/> 
 <p className=""  style={{ fontSize: '14px' }}>Mwani Africa is a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.

Mwani Africa's social enterprise leverages the Seaweed value-addition, to facilitate local small holder communities cultivate Seaweed. Empowering mostly women and youth. We brought together stakeholders, including Government, Academia and private sector and resolved to form a Seaweed association; Mwani Africa is formulating the constitution and framework.</p>

              </Col>
              <Col md={4}>
              <p className="" style={{ fontSize: '14px', display:'block !important' }}>At Mwani Africa we cultivate local species of Seaweed on low-impact 
          ocean farms in partnership with coastal First Nations. Then we use that Seaweed to manufacture products for crop and cattle farmers addressing two global challenges:
           <i><b>Food Security and Climate Change. </b></i></p>   
           
              </Col>
        <Col md={3}>
          <Row style={{marginTop:''}}>
            <Col>
            <Card className="what-card" style={{marginRight:'1rem'}}>  
     
              <h3 className='welcome-h3' style={{color:'#666666', textAlign:'left'}}>Mission</h3>
              <p style={{ fontSize: '14px', }}>
              Responsibly enhance healthy plants and soil while protecting the planet.
              </p>
              </Card>
            </Col>
          </Row>
          <Row >
            <Col>
            <Card className="what-card mt-2" style={{marginRight:'1rem'}}>  
              <h3 className='welcome-h3' style={{color:'#666666', textAlign:'left'}}>Vision</h3>
              <p style={{ fontSize: '14px'}}>
              A Social enterprise enhancing livelihoods; providing the most efficient healthy plants and soil solution; making the planet better.

 
              </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
