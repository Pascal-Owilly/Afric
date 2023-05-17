import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import how7 from '../img/how7.jpeg';
import img14 from '../img/img14.jpeg';
import person1 from '../img/person1.jpeg';
import './SocialEnterprise.css';
import 'animate.css';

const images = [ img14, how7, person1];

const MySection = () => {


  return (
    <>
    <hr />
       <Container style={{height:'100%', position:'relative'}}>
      <Row className="enterprise">
        <Col md={6} style={{height:'100%'}}>
    <hr />
        <h1 className=' ' style={{ color: '#666666', fontSize: '1.5rem', marginLeft:'2rem' }}>Social Enterprise</h1>     
     <hr />
     <Card className="enterprise-card">  <Image className="rounded-circle" src={img14} style={{height:'100%'}} fluid /> </Card>
     <p className="pt-3">Mwani Africa's social enterprise model leverages innovation to assist local coastal community smallholder farmers, mostly women and youth, in climate resilient Seaweed farming.</p>
     <Card className="enterprise-card" style={{width:'100%', height:'50vh'}}>  <Image className="rounded" src={person1} style={{height:'100%'}} fluid /> </Card>
        </Col>
        <Col md={3}>
          <h5 className="mt-0">Fertilizers</h5>
           <Card className="enterprise-card">  <p>Fertilizers are organic or inorganic substances that improve the soil’s chemical, biological, and physical characteristics. These are compounds designed to correct any nutrient deficiency detected in the soil.</p></Card>
           <h5 className="mt-0">Drenching (Soil/Root) Application</h5>
           <Card className="enterprise-card">  <p>The soil or root process involves directly/indirectly applying fertilizer to the base of the plant, either diluted in water or directly. This way, the aim is to bring the nutrients closer to the roots to assimilate more quickly.</p></Card>
           
           <h5 className="mt-0">Foliar</h5>
     <Card className="enterprise-card">  <p>Its purpose is to quickly make primary nutrients such as phosphorus, nitrogen, and potassium available to the plant.

On many occasions, the nutrients are very fixated on the soil, and the crops do not assimilate them, so this application always corrects the deficiencies.

Foliar fertilizers on plants, are applied as mists, sprays and/or drenches. The leaves then absorb them. When foliar is absorbed, its effects are appreciated very quickly.</p></Card>
         
         </Col>
          
                  

      <Col md={3} className='' style={{marginTop:'0'}}>
      <h5 className="mt-0">Application</h5>
           <Card className="enterprise-card">  <p>Depending on the type of fertilizer used, its qualities, or the expected results, there are three ways of application.</p></Card>
           <h5 className="mt-0">Fertigation</h5>

           <Card className="enterprise-card">  <p>Fertigation consists of the dissolution of different fertilizers in the irrigation water. Therefore, the nutrients are equally distributed throughout the land so the plants can absorb them.</p></Card>
           
        </Col>  
        
      </Row>
    </Container>
    <hr />
    </>
  );
};

export default MySection;
