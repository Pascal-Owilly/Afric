import React from 'react';
import Hero from './Hero';
import Card from './Cards';
import Team from './Team';
import Why from './Why';
import How from './How';
import Slides from './Slides';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>   

      <Hero />
      <Card />
      <Why />
      <How />
      <Slides />
    
    </>
  );
}

export default Home;