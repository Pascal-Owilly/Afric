import React from 'react';
import Hero from './Hero';
import './Home.css';
import Team from './Team';
import SlideComponent  from './SlideComponent';
import CardSect from './CardSect';
import Admin from './Admin';



function Home() {
  return (
    <>
    
      <Hero />
     
      <SlideComponent />
      <CardSect />
      {/* <Admin /> */}
      
          
    </>
  );
}

export default Home;
