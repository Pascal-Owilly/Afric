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
      <p className='mt-4' style={{  fontSize:'16px' }} >  Developed by:<span  className='text-white card-details'> <a target='_blank' style={{color:'#000092', textDecoration:'none', fontSize:'17px'}} href={linkedin} className="name">{name} </a>
      </span> </p>
           
        {/* <span className="position">{position}</span> */}
      </div>

      <div className="card-image">
        {/* <img src={dev} alt={name} style={{ width: '50px', height: '50px', borderRadius: '100%' }} /> */}
        {/* {hovered && ( */}
          <div className="profile-image-container" style={{ width: '50px', height: '50px', borderRadius: '100%' }}>
            <div className="icon-container">
            </div>
          </div>
        {/* )} */}
      </div>
      
    </div>
  );
};

export default FooterCard;
