import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.jpg';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <style>
        {`.navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }`}
      </style>
      <Navbar style={{backgroundColor:'purple'}} expand="lg" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top rounded-circle"
              alt="Mwani Africa Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded}   />
          <Navbar.Collapse id="basic-navbar-nav" className='text-center' style={{border:'none', backgroundColor:'gold', height:'8vh', width:'90%', color:'white'}}>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/" style={{color:'#fff', fontWeight:'bold'}}>Home</Nav.Link>
              <Nav.Link href="/about" style={{color:'#fff', fontWeight:'bold'}}>About</Nav.Link>
              <Nav.Link href="/team" style={{color:'#fff', fontWeight:'bold'}}>The Team</Nav.Link>
              <Nav.Link href="/contact" style={{color:'#fff', fontWeight:'bold'}}>Contact</Nav.Link>            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
