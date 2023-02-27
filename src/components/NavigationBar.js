import React, { useState, useEffect } from 'react';

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
    <nav
      style={{

        backgroundColor: scrollPosition > 100 ? 'rgb(8, 8, 37, 1)' : 'transparent',
        color: scrollPosition > 100 ? '#fff' : '#fff',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: scrollPosition > 100 ? '60px' : '80px',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrollPosition > 100 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        zIndex: '9999',
        transitionDuration: '5s'
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
        <a href="/" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            M Afric
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
            <a href="/" style={{ fontWeight:'bold', color: 'inherit', textDecoration: 'none', padding: '20px' }}>
              Home
            </a>
          </li>
          <li>
            <a href="/" style={{ fontWeight:'bold', color: 'inherit', textDecoration: 'none', padding: '20px' }}>
              About
            </a>
          </li>
          <li>
            <a href="/" style={{ fontWeight:'bold', color: 'inherit', textDecoration: 'none', padding: '20px' }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
