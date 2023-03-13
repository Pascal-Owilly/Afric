import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';

function AboutUs() {
  return (
    <div>
      <Container style={{height:'100vh'}}>
      <h1>Welcome to Mwani Africa</h1>
        <Row>
          <Col>
          <p>Mwani Africa is a Kenyan (East Africa) start-up providing a circular zero-waste solution of Ocean co-products, up-cycling to produce bio-stimulants and soil conditioner.

Mwani Africa's social enterprise leverages the Seaweed value-addition, to facilitate local small holder communities cultivate Seaweed. Empowering mostly women and youth. We brought together stakeholders, including Government, Academia and private sector and resolved to form a Seaweed association; Mwani Africa is formulating the constitution and framework.</p>
    <p>There are 150+ fertilizer companies in Kenya, less than 20% of them organic. Regional fertilizer companies are plagued by decreasing availability of raw materials due to the war in Ukraine. Mwani Africa boasts of a natural fertilizer, great for all plants and soil. The fast rate that Seaweed grows, guarantees inexhaustible supply of raw material. Mwani Africa proposes to meet the fertilizer deficit, fertilizer growing demand due to increase in population, and offer the best competitive prices.</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default AboutUs;
