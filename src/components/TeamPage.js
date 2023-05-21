import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import team1 from '../img/team1.jpeg';
import team2 from '../img/team2.jpeg';
import team3 from '../img/team3.jpeg';
import team4 from '../img/team4.png';
import team5 from '../img/team5.png';
import team6 from '../img/team6.png';
import team7 from '../img/team7.jpeg';
import { Link } from 'react-router-dom';
import './TeamPage.css';
import './CardHero.css'


const team = [team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7
]

// const ceo = [
//   {
//     name: "Mr. Oscar I. Mukiri",
//     position: "CEO Mwani Africa LTD",
//     contribution: "Social entrepreneur, Seaweed farming & Circular Economy catalyst trained",
//     more: "Background in Finance & NGO work",
//     link: "https://www.linkedin.com/in/mesteroscar/",
//     image: team4,
//   },
// ]

const teamMembers = [

    {
        name: "Dr Flower Msuya",
        contribution: "SEAWEED EXPERT",
        position: "PhD, Phycologist",
        // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        // more: "Senior Researcher & Consultant",
        more: "30yrs Experience",
        external_link: "https://www.linkedin.com/in/flower-msuya-4a95822/",
        link: "Head of Nation Asso",
        image: team2,
      },

      {
        name: "Oscar Ikinya",
        contribution: "CEO",
        position: "Seaweed MTA",
        // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        // more: "Senior Researcher & Consultant",
        more: "Circular Economy",
        external_link: "https://www.linkedin.com/in/mesteroscar/",
        link: "Public Private Partner",
        image: team4,
      },

      {
        name: "Dr Jack Dyer",
        contribution: "Blue Economy",
        position: "PhD, Maritime & Logistics Mgnt-Blue Economy and Climate Change",
        // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        // more: "Senior Researcher & Consultant",
        more: "",
        external_link: "https://www.usp.ac.fj/discipline-of-marine-studies/staff-profiles/dr-jack-dyers-phd/",
        link: "Vast Experience",
        image: team6,
      },

      {
        name: "Prof J Mwafaida",
        contribution: "R&D - Biostimulant",
        position: "PhD, Plant Pathology",
        // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
        // more: "Senior Researcher & Consultant",
        more: "30yrs Experience",
        external_link: "https://www.linkedin.com/in/joseph-mwafaida-a88b49b7/",
        link: "Pwani University",
        image: team5,
      },

      // {
      //   name: "Dr R Magwanga",
      //   contribution: "R&D - Protein & Fabric",
      //   position: "PhD, Breeding",
      //   // contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
      //   // more: "Senior Researcher & Consultant",
      //   more: "30yrs Experience",
      //   external_link: "https://www.linkedin.com/in/dr-richard-odongo-magwanga-ph-d-3158b643/?originalSubdomain=ke",
      //   link: "JOOUST University",
      //   image: team7,
      // },

];
const Cards = () => {
  return (
    <>
    <Container className='teampage'
                  style={{
                    // backgroundImage: `linear-gradient(rgb(128, 0, 128, .6), rgb(128, 0, 128, .6)), url(${t40})`,
                    backgroundColor:'white',
                    backgroundAttachment: "fixed",
                    backgroundRepeat:'noRepeat',
                    backgroundSize: "contain",
                    color: "white",
                    // height:'100vh',
                    marginTop:'10vh',
                    
                    
                  }}>
        <h2 className="text-center team-title" style={{textUnderlineOffset: '0.5rem', textDecorationSkip:'3px', textDecorationThickness:'2px',textDecorationSkipInk:'2rem', textDecorationColor:'font-family: didot-w01-italic,serif'}}> </h2> 
       
        {/* <Col md={3}>
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
        </Col> */}
        
       <div className="row" style={{color:'#666666', fontFamily:'cursive', marginTop:'22vh'}}>
        <h2 style={{color:'#666666', fontFamily:'cursive'}} className="text-left">The Team</h2>
        {teamMembers.map((card, index) => (
        <div className="col-md-2 m-auto" style={{marginTop:''}} key={index}>
          <Card className='mt-5' style={{border:'none', width:'100%', margin:'auto', backgroundColor:'transparent'}}>
           <Link target="_blank" to={card.external_link}> <Card.Img className="rounded-circle" style={{width:'80%'}} variant="top" src={card.image} /></Link>
            <Card.Body>
            <Link target="_blank" style={{textDecoration:'none'}} to={card.external_link}> <Card.Title style={{ fontStyle:'none', fontWeight:'700', color:'#666666',fontSize:'14px'}}>{card.name}</Card.Title></Link>
              <Card.Subtitle className='text-left mt-2' style={{backgroundColor:'#ffffff', color:'black', textDecoration:'uppercase', fontWeight:'bold', borderRadius:'5px', fontSize:'13px', textTransform:'uppercase'}}>{card.contribution} </Card.Subtitle>
              <Card.Text style={{ fontSize:'14px', color:'#666666'}} className="mt-2 text-muted">{card.position}</Card.Text>
              <Card.Text style={{ fontSize:'14px', color:'#666666'}}>{card.more}</Card.Text>
              <p className='bio-btn' style={{ fontSize:'14px', fontWeight:'500', color:'#666666'}} target="_blank" >{card.link}</p>
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
