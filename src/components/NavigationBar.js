import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo6 from '../img/logo5.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './NavigationBar.css';
import Search from './Search';



function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [navbarBackground, setNavbarBackground] = useState('#a066cc');
  const [navbarHeight, setNavbarHeight] = useState('8vh');
  const [linkFontSize, setLinkFontSize] = useState('1rem');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setNavbarBackground('#febd59');
    } else {
      setNavbarBackground('#a066cc');
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
        <Container fluid>
          <Row className="align-items-center">
            <Col md={2} className='align-center' >
              <Navbar.Brand style={{marginLeft:'4rem'}}>
                <Link to="/" title='Home'> 
                  <img
                    src={logo6}
                    width="50%"
                    height=""
                    className="d-inline-block align-right p-1 rounded mwani-logo"
                    alt="Mwani Africa Logo"
                    
                  />
                </Link>
              </Navbar.Brand>
             
            </Col>
            <hr style={{color:'white'}} className='p-only'/>
            <Col md={10} className="text-md-end">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded}>
                
                <span className="navbar-toggler-icon text-white"></span> 
                <span className="menu-text" style={{}}> MENU</span>  
              </Navbar.Toggle>

                <Link style={{color:'yellow', fontSize:'20px', marginTop:'-15px'}} to="https://api.whatsapp.com/send?phone=+254712154175">
              <span className='whatsapp p-only'>
            <FaWhatsapp /> 
            </span>
            </Link>

                <span className='linkedin p-only' style={{marginRight:'2rem'}}>
               <Link style={{color:'white', textDecoration:'none'}} target={'_blank'} to='https://www.linkedin.com/in/mesteroscar/'><FaLinkedin /></Link> 
                </span>
            </Col>

          <Navbar.Collapse id="basic-navbar-nav" className='text-center text-dark' style={{ border: 'none', height: '8vh'}}>
            <Nav >
            <span className="search-icon p-only" title="Enter search term" >
                <Search /> 
                </span> <hr /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link style={{fontWeight:'bold'}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/" className="nav-links"          >Home</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/about" className="nav-links"     >About</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/teampage" className="nav-links"      >Team</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/socialent" className="nav-links" >Social Enterprise</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }} to="/contact" className="nav-links"   >Contact</Nav.Link>

            <span className=' c-only' style={{marginLeft:'-2rem'}}>
               <Link style={{color:'white', textDecoration:'none', fontSize:'20px', marginLeft:'8rem'}} target={'_blank'} to='https://www.linkedin.com/in/mesteroscar/'><FaLinkedin /></Link> 
                </span>
                <Link style={{color:'yellow', fontSize:'20px', marginLeft:'2rem', fontWeight:'bolder'}} to="https://api.whatsapp.com/send?phone=+254712154175">
              <span className='c-only'>
            <FaWhatsapp />
            </span>
            </Link>
            </Nav>
          </Navbar.Collapse>

         </Row>
        </Container>

        <span className='linkedin c-only' style={{}}></span>
        <span className="search-icon c-only" title="Enter search term" onClick={handleSearchClick} style={{}}>
                <Search /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span> 
                

      
      </Navbar>
      

    </>
  );
}

export default NavigationBar