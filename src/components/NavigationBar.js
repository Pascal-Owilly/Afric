import React, { useState, useEffect } from 'react';
import './NavigationBar.css';
import logo from '../img/logo.jpg';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

function NavigationBar() {


  // logo
  const [logoImg, setLogoImg] = useState([logo]);
  
  // end logo 

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
    <nav
      style={{
        backgroundColor: scrollPosition > 100 ? 'green' : 'transparent',
        
        color: scrollPosition > 100 ? '#fff' : '#efefef ',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: scrollPosition > 100 ? '50px' : '100px',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrollPosition > 100 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        zIndex: '9999',
        transitionDuration: '0.3s'
        }}
        >
        <div
        style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        height: '100%',
        }}
        >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration:'none' }}>
        <img
        src={logo}
        alt="Logo"
        style={{ height: '45px', marginLeft: '-4.8rem' }}
        />
              
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded}   />
          <Navbar.Collapse id="basic-navbar-nav" className='text-center' style={{border:'none', backgroundColor:'goldenrod', height:'8vh', width:'90%', color:'white'}}>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/" className="nav-links" style={{fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/about" className="nav-links" style={{fontWeight:'bold'}}>About</Nav.Link>
            <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/team" className="nav-links" style={{fontWeight:'bold'}}>The Team</Nav.Link>
            <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/socialent" className="nav-links" style={{fontWeight:"bold"}}>Social Enterprise</Nav.Link>
            <Nav.Link as={Link} onClick={() => { setExpanded(false); window.scrollTo(0, 0); }}  to="/contact" className="nav-links" style={{fontWeight:'bold'}}>Contact</Nav.Link>            
         </Nav>
          </Navbar.Collapse>
        </div>
        {/* <hr className='hr-nav' /> */}
        </nav>
       
        );
        }
        
        export default NavigationBar;