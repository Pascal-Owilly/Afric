import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img11 from '../img/img11.jpeg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Row style={{backgroundColor:'goldenrod'}}>
        <Col md={9}>
          <Card
             style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(${img11})`,
              backgroundSize: "cover",
              color: "white",
            }}
          >
            <Card.Body>
              <Card.Title className="text-center" style={{fontSize:'25px', color:'goldenrod'}}>Welcome to Mwani Africa</Card.Title>
              <Card.Text style={{ height: "100vh" }}>
               <p>Mwani Africa is a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.

Mwani Africa's social enterprise leverages the Seaweed value-addition, to facilitate local small holder communities cultivate Seaweed. Empowering mostly women and youth. We brought together stakeholders, including Government, Academia and private sector and resolved to form a Seaweed association; Mwani Africa is formulating the constitution and framework.</p>
<p>There are 150+ fertilizer companies in Kenya, less than 20% of them organic. Regional fertilizer companies are plagued by decreasing availability of raw materials due to the war in Ukraine. Mwani Africa boasts of a natural fertilizer, great for all plants and soil. The fast rate that Seaweed grows, guarantees inexhaustible supply of raw material. Mwani Africa proposes to meet the fertilizer deficit, fertilizer growing demand due to increase in population, and offer the best competitive prices.</p>
              </Card.Text>
              </Card.Body>
              </Card>
        </Col>
        <Col md={3}>
          <Row>
            <Col>
            <Card className="what-card mt-3" style={{marginRight:'1rem'}}>  
     
              <h3 style={{fontSize:'25px'}}>Mission</h3>
              <p>
              Responsibly enhance healthy plants and soil while protecting the planet.
              </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className="what-card mt-2" style={{marginRight:'1rem'}}>  
              <h3 style={{fontSize:'25px'}}>Vision</h3>
              <p>
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
