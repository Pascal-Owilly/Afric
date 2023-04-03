import React from 'react';
import Hero from './Hero';
import Card from './Cards';
import Why from './Why';
import How from './How';
import './Home.css';
import Slides from './Slides';

function Home() {
  return (
    <>
      <Hero />
      <Slides />
      <Card />
      <Why />
      <How />   
     
    </>
  );
}

export default Home;
