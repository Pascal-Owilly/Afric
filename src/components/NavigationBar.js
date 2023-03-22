import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

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
      <Navbar className='navbar' expand="lg" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand>  
            <Link to="/">
              <img
                src={logo}
                width="75"
                height="70"
                className="d-inline-block align-top rounded"
                alt="Mwani Africa Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded}   />
          <Navbar.Collapse id="basic-navbar-nav" className='text-center' style={{ border:'none', height:'8vh', width:'90%', color:'white', flexDirection:'row !important' }}>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/" className="nav-links" style={{fontWeight:'bold'}}>Home</Nav.Link>
              <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/about" className="nav-links" style={{fontWeight:'bold'}}>About</Nav.Link>
              <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/team" className="nav-links" style={{fontWeight:'bold'}}>The Team</Nav.Link>
              <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/socialent" className="nav-links" style={{fontWeight:"bold"}}>Social Enterprise</Nav.Link>
              <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/contact" className="nav-links" style={{fontWeight:'bold'}}>Contact</Nav.Link>            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar