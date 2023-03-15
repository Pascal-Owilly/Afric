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

<div className="card-details">
        <span  className='text-muted'>Developed by:</span>
         <a target='_blank' style={{color:'purple', textDecoration:'none'}} href={linkedin} className="name">{name} </a>
        
        {/* <span className="position">{position}</span> */}
      </div>

      <div className="card-image">
        <img src={dev} alt={name} style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        {/* {hovered && ( */}
          <div className="profile-image-container" style={{ width: '50px', height: '50px', borderRadius: '100%' }}>
            <div className="icon-container">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon github" />
              </a>
            </div>
          </div>
        {/* )} */}
      </div>
      
    </div>
  );
};

export default FooterCard;
