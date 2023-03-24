import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardHero.css';

import img5 from '../img/img5.jpeg';
import img1 from '../img/img1.jpeg';
import person1 from '../img/person1.jpeg';
import person2 from '../img/person2.jpeg';
import img2 from '../img/img2.jpeg';
import img4 from '../img/img4.jpeg';
import cimg1 from '../img/cimg1.jpeg';
import cimg5 from '../img/cimg5.jpeg';
import cimg6 from '../img/cimg6.jpeg';
import heroimg from '../img/heroimg.jpeg';
import './CardHero.css';

function CardHero() {
  const images = [person1, cimg1, heroimg, cimg6];
  const texts = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat numquam, ducimus eos accusamus suscipit, ex molestias ut ratione minus amet quasi voluptatum adipisci vero aspernatur",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat numquam, ducimus eos accusamus suscipit, ex molestias ut ratione minus amet quasi voluptatum adipisci vero aspernatur",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat numquam, ducimus eos accusamus suscipit, ex molestias ut ratione minus amet quasi voluptatum adipisci vero aspernatur",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat numquam, ducimus eos accusamus suscipit, ex molestias ut ratione minus amet quasi voluptatum adipisci vero aspernatur",
      
  ];

  return (
    <Carousel className="hero-card mt-5" indicators={true} style={{backgroundColor:'rgb(86, 51, 211)', alignItems:'center', justifyContent:'center', color:'white', fontSize:'18px'}}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="card-container" style={{ position: "relative" }}>
            {index % 2 === 0 ? (
              <Card>
                <Card.Img
                  variant="top"
                  src={image}
                  className="img-fluid"
                />
              </Card>
            ) : (
              <p className='hero-card-text text-center   m-5' style={{display:'flex', alignItems:'center', justifyContent:'center', height:'23vh'}} >
                {texts[index]}
              </p>
            )}
            <div className="card-overlay"></div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardHero;
