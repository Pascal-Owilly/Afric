import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './FooterCard.css';
import dev from '../img/dev.png';

const FooterCard = ({ name, position, image, linkedin, github }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="footer-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

<div className="text-center">
      <p className='mt-4' style={{  fontSize:'16px' }} >  Developed by:<span  className='text-white card-details'> <a target='_blank' style={{color:'#000092', textDecoration:'none', fontSize:'17px', color:'#81ba00'}} href={linkedin} className="name">{name} </a>
      </span> </p>
      </div>


      
    </div>
  );
};

export default FooterCard;
