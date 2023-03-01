import React, { useState, useEffect } from 'react';
import './NavigationBar.css'
import logo from '../img/logo.png'

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
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration:'none' }}>
        <img
        src={logo}
        alt="Logo"
        style={{ height: '45px', marginLeft: '-4.8rem' }}
        />
        <span style={{ fontSize: '20px', fontWeight: 'bold', position:'relative', textDecoration:'none' }}>
       <span style={{fontFamily:'verdana', color:'#efefef', marginLeft:'0.5rem'}}> Mwani</span> <br /><span style={{color:'#000092', marginLeft:'0.5rem'}}>Africa</span> 
        </span>
        </a>
        <ul
        style={{
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        }}
        >
        <li>
        <a
        href="/"
        style={{
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        padding: '20px',
        
        }}
        >
        Home
        </a>
        </li>
        <li>
        <a
        href="/"
        style={{
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        padding: '20px',
        }}
        >
        About
        </a>
        </li>
        <li>
        <a
        href="/"
        style={{
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        padding: '20px',
        }}
        >
        Contact
        </a>
        </li>
        <li>
        <a
        href="/"
        style={{
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        padding: '20px',
        }}
        >
        Explore
        </a>
        </li>
        </ul>
        </div>
        {/* <hr className='hr-nav' /> */}
        </nav>
       
        );
        }
        
        export default NavigationBar;