import React from 'react';
import NavigationBar from './NavigationBar';
import Hero from './Hero';
import Card from './Cards';
import Slides from './Slides';
import Footer from './Footer';
import Team from './Team';
import Why from './Why';
import How from './How';


function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Card />
      <Why />
      <How />
      <Team />
      <Footer />
  
    </>
  );
}

export default Home;