import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import team1 from '../img/team1.jpeg';
import team2 from '../img/team2.jpeg';
import team3 from '../img/team3.jpeg';
import team4 from '../img/team4.png';
import team5 from '../img/team5.png';
import team6 from '../img/team6.png';
import { Link } from 'react-router-dom';


const team = [team1,
  team2,
  team3,
  team4,
  team5,
  team6]

const teamMembers = [
    {
        name: "Dominic Kahumbu",
        position: "CEO Biogas International Ltd, Biogas Expert",
        contribution: "Business Incubator and Investor",
        more: "",
        link: "https://biogas.co.ke/staff/staff-1/dsc_0893/",
        image: team3,
      },
      {
        name: "Dr. Flower Msuya",
        position: "PhD, Phycologist",
        contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        more: "Senior Researcher & Consultant",
        link: "https://www.linkedin.com/in/flower-msuya-4a95822/",
        image: team2,
      },
      {
        name: "Dr. Jack Dyer",
        position: "PhD, Maritime & Logistics Mgmt - Blue economy & climate change",
        contribution: "Technical Blue economy, innovation and seaweed expert",
        more: "",
        link: "https://www.usp.ac.fj/discipline-of-marine-studies/staff-profiles/dr-jack-dyers-phd/",
        image: team6,
      },

  {
    name: "	Dr. Edward Karanja",
    position: "PhD, Microbiology",
    contribution: "Senior Researcher ICIPE - International Center of Insect Physiology and Ecology",
    more: "",
    link: "http://www.icipe.org/about/staff/dr-edward-nderitu-karanja",
    image: team1,
  },


  {
    name: "Mr. Oscar I. Mukiri",
    position: "CEO Mwani Africa LTD",
    contribution: "Social entrepreneur, Seaweed farming & Circular Economy catalyst trained",
    more: "Background in Finance & NGO work",
    link: "https://www.linkedin.com/in/mesteroscar/",
    image: team4,
  },
  {
    name: "Prof. Joseph Mwafaida",
    position: "Senior Professor Pwani university",
    contribution: "PhD, Plant Pathology",
    more: "Biologist with rich history in plant protection",
    link: "https://www.linkedin.com/in/joseph-mwafaida-a88b49b7/",
    image: team5,
  },

];
const Cards = () => {
  return (
    <>
    <Container style={{marginTop:'20vh'}}>
        <h2 className="text-center">The Team at Mwani Africa</h2> <br />
        <p style={{ fontSize: '20px', lineHeight: '26px', color:'#666666' }}>Having the right people for any job is a critical success factor. Mwani Africa is no different. As our business continues to grow, so does our team.</p>
    <div className="row mb-4">
      {teamMembers.map((card, index) => (
        <div className="col-md-4" style={{marginTop:''}} key={index}>
          <Card className='mt-3'>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{card.position}</Card.Subtitle>
              <Card.Text>{card.contribution}</Card.Text>
              <Card.Text>{card.more}</Card.Text>
              <Button style={{backgroundColor:'transparent', color:'#666666', width:'100%'}} target="_blank" href={card.link}>See more</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    <h2 className='text-center'>Governance</h2>
    <p style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }}>Our Board of Directors is composed of business professionals with select and specific knowledge and expertise. The Board sets the strategic direction and provides oversight and accountability to stakeholders and investors. They oversee management, finances, and quality, build community relationships, establish ethical standards, values, and compliance. They provide direction to and support the Chief Executive Officer (CEO) in delivering the strategic priorities.</p>
    </Container>
    </>
  );
};

export default Cards;
