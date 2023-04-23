import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo from '../img/logo1.jpeg';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import './NavigationBar.css';
import Search from './Search';



function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [navbarBackground, setNavbarBackground] = useState('purple');
  const [navbarHeight, setNavbarHeight] = useState('8vh');
  const [linkFontSize, setLinkFontSize] = useState('1rem');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setNavbarBackground('rgb(207, 169, 71)');
    } else {
      setNavbarBackground('purple');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });


  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <style>
        {`.navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        @media (max-width: 991.98px) {
          .navbar-toggler {
            position: relative;
            padding: 0;
            width: 50px;
            height: 50px;
            border: none;
            background-color: transparent;
            .menu-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 14px;
              font-weight: bold;
            }
          }
        }`}
      </style>
      <Navbar className='navbar' fixed='top' expand="lg" expanded={expanded} style={{backgroundColor: navbarBackground}}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center">
              <Navbar.Brand>
                <Link to="/" title='Home' style={{textDecoration:'none',color:'white', padding:'10px'}}> <span>Mwani</span>
                  <img
                    src={logo}
                    width="50px"
                    height=""
                    className="d-inline-block p-1 rounded-circle"
                    alt="Mwani Africa Logo"
                  /> <span style={{marginLeft:'-3px'}}>Africa</span>
                </Link>
              </Navbar.Brand>
             
            </Col>
            <hr className='p-only'/>
            <Col md={6} className="text-md-end text-center">
            
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded}>
                <span className="navbar-toggler-icon text-white"></span> 
                <span className="menu-text" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MENU</span>  
              </Navbar.Toggle>
              <span className="search-icon" title="Enter search term" onClick={handleSearchClick}>
                <Search /> 
                </span>
                <span className='linkedin' style={{marginRight:''}}>
               <Link style={{color:'white', textDecoration:'none'}} target={'_blank'} to='https://www.linkedin.com/in/mesteroscar/'><FaLinkedin /></Link> 
                </span>
            </Col>

          </Row>

          <Navbar.Collapse id="basic-navbar-nav" className='text-center text-dark' style={{ border: 'none', height: '8vh'}}>
            <Nav className="justify-content-start justify-content-md-end">
              <Nav.Link style={{}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/" className="nav-links"          >Home</Nav.Link>
              <Nav.Link style={{}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/about" className="nav-links"     >About</Nav.Link>
              <Nav.Link style={{}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/teampage" className="nav-links"      >Team</Nav.Link>
              <Nav.Link style={{}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/socialent" className="nav-links" >Social Enterprise</Nav.Link>
              <Nav.Link style={{}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/contact" className="nav-links"   >Contact</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
         
        </Container>
      </Navbar>

    </>
  );
}

export default NavigationBar