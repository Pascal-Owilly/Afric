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
import plant5 from '../img/plant1.jpeg';
import plant2 from '../img/plant2.jpeg';
import plant3 from '../img/plant3.jpeg';
import plant4 from '../img/plant4.jpeg';
import cimg1 from '../img/cimg1.jpeg';
import cimg2 from '../img/cimg2.jpeg';
import cimg3 from '../img/cimg3.jpeg';
import cimg4 from '../img/cimg4.jpeg';
import cimg5 from '../img/cimg5.jpeg';
import cimg6 from '../img/cimg6.jpeg';
import './CardHero.css';

function CardHero() {
  const images = [    img5,    img4,    img1,    person1,    person2,    plant2,    plant3,    plant4,    plant5,    cimg1,    cimg2,    cimg3,    cimg4,    cimg5,    cimg6,  ];

  return (
    <Carousel className="hero-card" indicators={false}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            className="card-container"
            style={{ position: 'relative' }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={image}
                className="img-fluid"
                style={{
                  
                }}
              />
              <Card.Body></Card.Body>
            </Card>
            <div className="card-overlay"></div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardHero;
