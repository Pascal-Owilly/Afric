import React from 'react';
import Hero from './Hero';
import Card from './Cards';
import Why from './Why';
import How from './How';
import './Home.css';
import SlideComponent  from './SlideComponent';



function Home() {
  return (
    <>
      <Hero />
      <SlideComponent />
      <Card />
      <Why />
      <How />   
     
    </>
  );
}

export default Home;
