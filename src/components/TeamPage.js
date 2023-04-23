import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import team1 from '../img/team1.jpeg';
import team2 from '../img/team2.jpeg';
import team3 from '../img/team3.jpeg';
import team4 from '../img/team4.png';
import team5 from '../img/team5.png';
import team6 from '../img/team6.png';
import { Link } from 'react-router-dom';
import './TeamPage.css';


const team = [team1,
  team2,
  team3,
  team4,
  team5,
  team6]

const ceo = [
  {
    name: "Mr. Oscar I. Mukiri",
    position: "CEO Mwani Africa LTD",
    contribution: "Social entrepreneur, Seaweed farming & Circular Economy catalyst trained",
    more: "Background in Finance & NGO work",
    link: "https://www.linkedin.com/in/mesteroscar/",
    image: team4,
  },
]

const teamMembers = [

    {
        name: "Dr. Flower Msuya",
        // position: "PhD, Phycologist",
        // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        // more: "Senior Researcher & Consultant",
        link: "https://www.linkedin.com/in/flower-msuya-4a95822/",
        image: team2,
      },
      {
        name: "Dr. Jack Dyer",
        // position: "PhD, Maritime & Logistics Mgmt - Blue economy & climate change",
        // contribution: "Technical Blue economy, innovation and seaweed expert",
        // more: "",
        link: "https://www.usp.ac.fj/discipline-of-marine-studies/staff-profiles/dr-jack-dyers-phd/",
        image: team6,
      },

  {
    name: "	Dr. Edward Karanja",
    // position: "PhD, Microbiology",
    // contribution: "Senior Researcher ICIPE - International Center of Insect Physiology and Ecology",
    // more: "",
    link: "http://www.icipe.org/about/staff/dr-edward-nderitu-karanja",
    image: team1,
  },

  {
    name: "Prof. Joseph Mwafaida",
    // position: "Senior Professor Pwani university",
    // contribution: "PhD, Plant Pathology",
    // more: "Biologist with rich history in plant protection",
    link: "https://www.linkedin.com/in/joseph-mwafaida-a88b49b7/",
    image: team5,
  },

];
const Cards = () => {
  return (
    <>
    <Container style={{marginTop:'20vh'}}>
        <h2 className="text-center team-title" style={{textUnderlineOffset: '0.5rem', textDecorationSkip:'3px', textDecorationThickness:'2px',textDecorationSkipInk:'2rem', textDecorationColor:'font-family: didot-w01-italic,serif;'}}> Team </h2> <br />
       <Row>
       <Col md={4}></Col>
        <Col md={4}>
        <div>
       {ceo.map((mwani, index) => (
       <Card className='mt-3' style={{border:'none', width:'100%', margin:'auto'}}>
            <Card.Img className="rounded-circle" style={{width:'70%'}} variant="top" src={mwani.image} />
            <Card.Body>
              <Card.Title style={{fontFamily: 'didot-w01-italic,serif', fontStyle:'italic', color:'#0F0F0F'}}>{mwani.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{mwani.position}</Card.Subtitle>
              <Card.Text>{mwani.contribution}</Card.Text>
              <Card.Text>{mwani.more}</Card.Text>
              <Button className='bio-btn' style={{backgroundColor:'transparent', color:'#000', width:'100%', borderRadius:'30px', width:'120px', fontStyle:'italic', fontFamily:'Verdana', border:'1px solid black'}} target="_blank" href={mwani.link}>Show Bio</Button>
            </Card.Body>
          </Card>
            ))}
       </div>
        </Col>
        <Col md={4}></Col>
       </Row>


       <div className="row mb-4">
        <h2 className="text-center text-dark mt-5">Advisory Board</h2>
        {teamMembers.map((card, index) => (
        <div className="col-md-4" style={{marginTop:''}} key={index}>
          <Card className='mt-5' style={{border:'none', width:'70%', margin:'auto'}}>
            <Card.Img className="rounded-circle" style={{}} variant="top" src={card.image} />
            <Card.Body>
              <Card.Title style={{fontFamily: 'didot-w01-italic,serif', fontStyle:'italic', color:'#0F0F0F'}}>{card.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{card.position}</Card.Subtitle>
              <Card.Text>{card.contribution}</Card.Text>
              <Card.Text>{card.more}</Card.Text>
              <Button className='bio-btn' style={{backgroundColor:'transparent', color:'#000', width:'100%', borderRadius:'30px', width:'120px', fontStyle:'italic', fontFamily:'Verdana', border:'1px solid black'}} target="_blank" href={card.link}>Show Bio</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    {/* <h2 className='text-center'>Governance</h2>
    <p style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }}>Our Board of Directors is composed of business professionals with select and specific knowledge and expertise. The Board sets the strategic direction and provides oversight and accountability to stakeholders and investors. They oversee management, finances, and quality, build community relationships, establish ethical standards, values, and compliance. They provide direction to and support the Chief Executive Officer (CEO) in delivering the strategic priorities.</p> */}
    </Container>
    </>
  );
};

export default Cards;
