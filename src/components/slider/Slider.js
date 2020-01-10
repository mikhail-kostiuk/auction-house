import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import {
  SliderWrapper,
  Title,
  List,
  ArrowButtonLeft,
  ArrowButtonRight,
  ArrowIcon,
  SlideContainer,
} from "./SliderStyles";
import Slide from "./slide/Slide";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(6);
  const [items, setItems] = useState([]);
  // const [slideDirection, setSlideDirection] = useState("left");

  const totalSlides = 16;

  useEffect(() => {
    const resultSet = [];

    firestore
      .collection("items")
      .limit(totalSlides)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          resultSet.push({ id: doc.id, ...doc.data() });
        });
        setItems(resultSet);
      });
  }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("setInterval");
  //     console.log(currentSlide);

  //     if (currentSlide === 1) {
  //       setSlideDirection("left");
  //     } else if (currentSlide === 11) {
  //       setSlideDirection("right");
  //       console.log(slideDirection);
  //     }

  //     if (slideDirection === "left") {
  //       slideToLeft();
  //     } else {
  //       slideToRight();
  //     }
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [currentSlide]);

  function slideToRight() {
    setCurrentSlide(currentSlide - 1);
  }

  function slideToLeft() {
    setCurrentSlide(currentSlide + 1);
  }

  return (
    <SliderWrapper totalSlides={totalSlides} currentSlide={currentSlide}>
      <Title>Ending Soon</Title>
      <List totalSlides={totalSlides} currentSlide={currentSlide}>
        <ArrowButtonLeft
          onClick={slideToRight}
          totalSlides={totalSlides}
          currentSlide={currentSlide}
        >
          <ArrowIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.41 14"
            fill="currentColor"
          >
            <path d="M0,7" />
            <path d="M1.41,8.41,7,14l1.41-1.41L2.82,7,8.41,1.41,7,0,1.41,5.59,0,7" />
          </ArrowIcon>
        </ArrowButtonLeft>
        <ArrowButtonRight onClick={slideToLeft} currentSlide={currentSlide}>
          <ArrowIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.41 14"
            fill="currentColor"
          >
            <path d="M8.41,7" />
            <path d="M7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,8.41,7" />
          </ArrowIcon>
        </ArrowButtonRight>
        {items.map(item => (
          <SlideContainer key={item.id}>
            <Slide item={item} />
          </SlideContainer>
        ))}
      </List>
    </SliderWrapper>
  );
}

export default Slider;