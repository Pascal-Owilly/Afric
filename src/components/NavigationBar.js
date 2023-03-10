import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container,Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from '../img/logo.png';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`bg-light text-dark ${scrollPosition > 50 ? 'navbar-green' : ''}`} expand='lg' fixed='top'>

      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            alt='Logo'
            style={{ height: '42px' }}
          />
          <span style={{ fontSize: '20px', fontWeight: 'bold', position: 'relative', textDecoration: 'none' }}>
            <span style={{ fontFamily: 'verdana', color: scrollPosition > 50 ? '#2f2f2f' : '#000092', marginLeft: '0.5rem' }}>Mwani Africa</span>
          </span>
        </Navbar.Brand>
<Col></Col>
        <div className='icons text-dark d-flex align-items-center justify-content-center'>
        <div className="d-inline-block mx-2 icon" style={{ cursor: 'pointer' }}>
            <FaFacebook />
        </div>
          <div className="d-inline-block mx-2 icon" style={{ cursor: 'pointer' }}>
            <FaInstagram />
          </div>
          <div className="d-inline-block mx-2 icon" style={{ cursor: 'pointer' }}>
            <FaLinkedin />
          </div>
          <div className="d-inline-block mx-2 icon" style={{ cursor: 'pointer' }}>
            <FaWhatsapp />
          </div>
          <div className="d-inline-block mx-2 icon" style={{ cursor: 'pointer' }}>
            <FaEnvelope />
          </div>
        </div>

        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ms-auto'>
          <Nav.Link href='/' className="nav-link" style={{ fontWeight: 'bold', color: scrollPosition > 50 ? '#2f2f2f' : '#111', textDecoration: 'none' }}>Home</Nav.Link>


            <Nav.Link  Link to='/About' style={{ fontWeight: 'bold', color: scrollPosition > 50 ? '#2f2f2f' : '#111', textDecoration: 'none' }}>About</Nav.Link>
            <Nav.Link href='/' style={{ fontWeight: 'bold', color: scrollPosition > 50 ? '#2f2f2f' : '#111', textDecoration: 'none' }}>Contact</Nav.Link>
            <Nav.Link href='/' style={{ fontWeight: 'bold', color: scrollPosition > 50 ? '#2f2f2f' : '#111', textDecoration: 'none' }}>Explore</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
