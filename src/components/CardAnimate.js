// import React, { useState, useEffect } from "react";
// import "./CardAnimate.css";

// const cardAnimateData = [
//   {
//     id: 1,
//     title: "Card 1",
//     content: "This is card 1 content",
//     bgColor: "#f44336"
//   },
//   {
//     id: 2,
//     title: "Card 2",
//     content: "This is card 2 content",
//     bgColor: "#4caf50"
//   },
//   {
//     id: 3,
//     title: "Card 3",
//     content: "This is card 3 content",
//     bgColor: "#2196f3"
//   },
//   {
//     id: 4,
//     title: "Card 4",
//     content: "This is card 4 content",
//     bgColor: "#ff9800"
//   }
// ];

// const SlideCards = () => {
//   const [translateValue, setTranslateValue] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   console.log('animate displayed');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNextClick();
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handlePrevClick = () => {
//     setActiveIndex(activeIndex === 0 ? cardAnimateData.length - 1 : activeIndex - 1);
//     setTranslateValue(translateValue + 100);
//   };

//   const handleNextClick = () => {
//     setActiveIndex(activeIndex === cardAnimateData.length - 1 ? 0 : activeIndex + 1);
//     setTranslateValue(translateValue - 100);
//   };

//   return (
//     <div className="slide-cards-animate-wrapper">
//       <div className="slide-cards-animate">
//         {cardAnimateData.map((cardAnimate, index) => (
//           <div
//             key={cardAnimate.id}
//             className={`cardAnimate ${activeIndex === index ? "active" : ""}`}
//             style={{
//               transform: `translateX(${translateValue}%)`,
//               backgroundColor: cardAnimate.bgColor
//             }}
//           >
//             <h3>{cardAnimate.title}</h3>
//             <p>{cardAnimate.content}</p>
//           </div>
//         ))}
//       </div>
//       <div className="arrow-animate-wrapper">
//         <div className="prev-arrow-animate" onClick={handlePrevClick}>
//           &#10094;
//         </div>
//         <div className="next-arrow-animate" onClick={handleNextClick}>
//           &#10095;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideCards;
