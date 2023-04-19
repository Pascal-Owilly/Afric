import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import './CardSect.css';
import cardimg2 from '../img/cardimg2.jpeg';
import cardimg from '../img/cardimg.jpeg';
import img4 from '../img/img4.jpeg';
import img1 from '../img/img1.jpeg';
import cimg1 from '../img/c-img1.jpeg';
import img9 from '../img/img9.jpeg'


const cardData = [
  {
    title: "Seaweed ",
    description: " ",
    img: cardimg2,
  },
  {
    title: "Seaweed",
    description: "",
    img:  img4,
  },
  {
    title: "Seaweed",
    description: "",
    img: cimg1
  },
  {
    title: "Seaweed",
    description: "",
    img:cardimg,
  },
  {
    title: "Seaweed",
    description: "",
    img: img9
  },
];

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  // slide for mobile

  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, title: 'Seaweed', image: img9 },
    { id: 2, title: 'Seaweed', image: cardimg },
    { id: 3, title: 'Seaweed', image: cimg1 },
    { id: 4, title: 'Seaweed', image: cardimg2},
    { id: 5, title: 'Seaweed', image: img4 },
  ];

    // Calculate the next index
    const nextIndex = () => {
      const next = currentSlide + 1;
      return next >= cards.length ? 0 : next;
    };
  
    // Calculate the previous index
    const prevIndex = () => {
      const prev = currentSlide - 1;
      return prev < 0 ? cards.length - 1 : prev;
    };

    // end mobile slide

  const handleNextClick = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setSlideDirection("");
      setStartIndex((startIndex) => Math.min(startIndex + 2, cardData.length - 3));
    }, 300);
  };

  const handlePrevClick = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setSlideDirection("");
      setStartIndex((startIndex) => Math.max(startIndex - 2, 0));
    }, 300);
  };

  return (
    <Container style={{position:'relative', zIndex: 1}}>
      <hr />
      <h2 className="text-center mt-5 mb-4" style={{color:'#666666', fontFamily:'poppins'}}><i>Explore our products</i></h2>
    <div className="card-carousel c-only cardsect mt-4" style={{height:'65vh'}}>
      <div className={`card-carousel-container cardsect-carousel-container ${slideDirection}`}>
        <Row>
          {cardData.slice(startIndex, startIndex + 3).map((card, index) => (
            <Col key={index} className="">
              <Card className="cool-card">
                
              <div className=" " style={{height:'300px'}}>
                <Row>
                  <Col>
                <h4 className="card-title cardsect-title" style={{textAlign:'left'}} >{card.title}</h4>
                </Col>
                <Col>
                <p className="card-description cardsect-description" style={{textAlign:'right'}} >{card.description}</p>
                </Col>
                </Row>
                <Card.Img src={card.img} />
                 
               
              </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="card-carousel-buttons mt-3 text-center" >
        <button style={{width:'100px', borderBottom:'1px solid #002600', borderRadius:'25px'}} className='cardsect-carousel-buttons' onClick={handlePrevClick} disabled={startIndex === 0}>
        &#8249; &#8249;&#8249; &nbsp; Prev
        </button>&nbsp;
        <button style={{width:'100px', borderBottom:'1px solid #002600', borderRadius:'25px'}} className='cardsect-carousel-buttons' onClick={handleNextClick} disabled={startIndex >= cardData.length - 3}>
          Next  &nbsp; &#8250;&#8250;&#8250;
        </button>
      </div>
    </div>

    {/* mobile slide */}

    <div className="card-carousel cardsect p-only">
      <div className="card-carousel-container cardsect-carousel-container" >
        <Row>
         
        {cards.map((card, index) => {
          const active = index === currentSlide;
          const classNames = ['slidecard'];
          if (active) classNames.push('active');
          return (
            <div className={classNames.join(' ')} key={card.id}>
              <Col>
              <h2>{card.title}</h2>
              </Col>
              <Col>
              < img src={card.image} />
              </Col>
            </div>
          );
        })}
        
        </Row>
      </div>
      <div className="slidebutton-container mb-5">
        <button className="" style={{width:'100px', borderBottom:'1px solid #002600', borderRadius:'25px' }}  onClick={handlePrevClick} onClick={() => setCurrentSlide(prevIndex)}>&#8249; &#8249;&#8249; &nbsp; Prev</button>&nbsp;&nbsp;&nbsp;
        <button className="" style={{width:'100px', borderBottom:'1px solid #002600', borderRadius:'25px' }}  onClick={handlePrevClick} onClick={() => setCurrentSlide(nextIndex)}>Next  &nbsp; &#8250;&#8250;&#8250;</button>
        
      </div>
    </div>

    <Row>
      <Container className='mb-2'>
        <Row>
      <Col md={8}>
<img className="p-only" src={img4} style={{width:'100%'}}/>
<img className="c-only" src={img1} style={{width:'100%'}}/>
      </Col>
      <Col md={4}>
      
<p className="mt-2">There are 150+ fertilizer companies in Kenya, less than 20% of them organic. Regional fertilizer companies are plagued by decreasing availability of raw materials due to the war in Ukraine. </p>
 <p>  Mwani Africa boasts of a natural fertilizer, great for all plants and soil.</p> <p> The fast rate that Seaweed grows, guarantees inexhaustible supply of raw material. Mwani Africa proposes to meet the fertilizer deficit, fertilizer growing demand due to increase in population, and offer the best competitive prices.</p>
  

        </Col>
        </Row>
        </Container>
    </Row>

    </Container>
  );
};

export default CardCarousel;
