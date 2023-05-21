import React from "react";
import "./Research.css";
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './fonts.css';
import lobster from '../fonts/Lobster_Two/LobsterTwo-Regular.ttf';

function Research() {

  const lobster = {
    fontFamily:'lobster',
  }

  return (
    <>
    <Container style={{height:'100vh', width:'95%', overflow:'hidden', padding:0, margin:'auto'}} className="">
      <Row>
        <Col md={2}>
        </Col>
        <Col md={8}>
        <div className='text-dark' style={{textAlign:'left', marginTop:'20vh'}} >
    <h4 style={lobster}>Things under research</h4>
      <p>Although ocean is covering 70% of our earth, we are producing almost zero electricty out of it (and offshore wind is not a marine energy). 
        In fact, marine energy (mainly wave and tidal) could cover many times the world power consumption.
      </p>
      <p>Regarding regulating CO<sub>2</sub> using ocean, there is a natural phenomenon called 'upwelling' where ocean upward current bring nutrients up to the surface and feed phytoplankton. These areas are abundant in fishes.</p>
      <p>We can reproduce it (artificial upwelling) by using Hace wave energy to power an uplifting system but not using sea water pumps which are too energy-intensive:
       
      </p>
          <Link to=' https://www.linkedin.com/posts/minhducpham_nature-carboncapture-upwelling-activity-6760154460061863936-F4Fa/'> https://www.linkedin.com/posts/minhducpham_nature-carboncapture-upwelling-activity-6760154460061863936-F4Fa/</Link>
         &nbsp; HACE (Hydro Air Concept Energy):
          <Link to='https://hacewaveenergy.com/waveenergy'>https://hacewaveenergy.com/waveenergy</Link>
    </div>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
   
    </Container>
    </>
  );
}

export default Research;