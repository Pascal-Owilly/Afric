import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { CardDeck } from 'react-bootstrap';

import "./SlideComponent.css";

const cardsData = [

  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    title: "Card 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/id/238/200/300",
  },
  {
    title: "Card 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://picsum.photos/id/239/200/300",
  },
  {
    title: "Card 4",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://picsum.photos/id/240/200/300",
  },
];

 const CardsHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % cardsData.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div className="container">
      <CardDeck>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className={`carousel-card ${
              activeIndex === index ? "active" : ""
            } ${
              (activeIndex + 1) % cardsData.length === index
                ? "next"
                : ""
            }`}
          >
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}
export default CardsHero;
