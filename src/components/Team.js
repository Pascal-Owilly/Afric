import React, { useState,useRef, useEffect } from "react";
import "./Team.css";
import {Container} from 'react-bootstrap';
import team1 from '../img/team1.jpeg';
import team2 from '../img/team2.jpeg';
import team3 from '../img/team3.jpeg';
import team4 from '../img/team4.png';
import team5 from '../img/team5.png';
import team6 from '../img/team6.png';


const team = [team1,
  team2,
  team3,
  team4,
  team5,
  team6]

const teamMembers = [
  {
    name: "	Dr. Edward Karanja",
    position: "PhD, Microbiology",
    contribution: "Senior Researcher ICIPE - International Center of Insect Physiology and Ecology",
    more: "",
    image: team1,
  },
  {
    name: "Dr. Flower Msuya",
    position: "PhD, Phycologist",
    contribution: "Chairlady ZaSCI - Zanzibar Seaweed Cluster Initiative",
    more: "Senior Researcher & Consultant",
    image: team2,
  },
  {
    name: "Dominic Kahumbu",
    position: "CEO Biogas International Ltd, Biogas Expert",
    contribution: "Business Incubator and Investor",
    more: "",
    image: team3,
  },
  {
    name: "Mr. Oscar I. Mukiri",
    position: "CEO Mwani Africa LTD",
    contribution: "Social entrepreneur, Seaweed farming & Circular Economy catalyst trained",
    more: "Background in Finance & NGO work",
    image: team4,
  },
  {
    name: "Prof. Joseph Mwafaida",
    position: "Senior Professor Pwani university",
    contribution: "PhD, Plant Pathology",
    more: "Biologist with rich history in plant protection",
    image: team5,
  },
  {
    name: "Dr. Jack Dyer",
    position: "PhD, Maritime & Logistics Mgmt - Blue economy & climate change",
    contribution: "Technical Blue economy, innovation and seaweed expert",
    more: "",
    image: team6,
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === teamMembers.length - 1 ? 0 : prevSlide + 1));

    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index, e) => {
    e.preventDefault();
    const lastIndex = teamMembers.length - 1;
    const currentSlide = index === lastIndex ? 0 : index;
    setCurrentSlide(currentSlide);
  };
  


  return (
    <>
    <Container fluid style={{maxHeight:'100vh', width:'100%', overflow:'hidden'}} className="slideshow-container">
      <h3 style={{textAlign:'center', marginRight:'4rem',marginTop:'11rem', backgroundColor:'rgba(14, 10, 10, 0.7)',opacity:'0.8', color:'#ffffff', width:'40%',borderRadius:'30px', fontFamily:'serif'}}>The Team</h3>
    <div style={{textAlign:'center', marginTop:'4rem'}} >
       <div className="slideshow">
        <div ref={slideshowContainerRef} className="slideshow__wrapper">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`slideshow__slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              <img
                className="slideshow__image"
                src={member.image}
                alt={member.name}       
              />
              <div className="slideshow__info" style={{color:'greenyellow', maxWidth:'30%'}}>
                <h2 className="slideshow__name">{member.name}</h2>
                <p style={{color:'#fff'}} className="slideshow__position">{member.position}</p>
                <p style={{color:'#efefef'}} className="slideshow__contribution">{member.contribution}</p>
                <p style={{color:'#efefef'}} className="slideshow__contribution">{member.more}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slideshow__dots">
        {teamMembers.map((member, index) => (
          <span
            key={index}
            className={`slideshow__dot ${index === currentSlide ? "active" : ""}`}
            type="button"
            tabIndex="-1"
            onClick={(e) => handleDotClick(index, e)}
            ></span>
        ))}
        </div>
      </div>
    </div>
    </Container>
    </>
  );
}

export default App;