import React, { useState } from "react";
import {
  SliderWrapper,
  SliderList,
  ArrowButtonLeft,
  ArrowButtonRight,
  ArrowIcon,
  Slide,
  ItemImageContainer,
  ItemImage,
  ItemName,
  TimeDetails,
  TimeLeft,
} from "./SliderStyles";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(6);
  const totalSlides = 16;

  function slideToRight() {
    console.log(currentSlide);
    setCurrentSlide(currentSlide - 1);
  }

  function slideToLeft() {
    setCurrentSlide(currentSlide + 1);
  }

  function createSlides() {
    let slides = [];

    for (let i = 0; i < 16; i++) {
      slides.push(
        <Slide key={i}>
          <ItemImageContainer>
            <ItemImage src="https://placeimg.com/640/480/arch" alt="Item1" />
          </ItemImageContainer>
          <ItemName>Hand Painted Asian Lacquer jewelry Box</ItemName>
          <TimeDetails>
            <TimeLeft>1 Day Left</TimeLeft>
          </TimeDetails>
        </Slide>
      );
    }
    return slides;
  }
  return (
    <SliderWrapper totalSlides={totalSlides} currentSlide={currentSlide}>
      <SliderList totalSlides={totalSlides} currentSlide={currentSlide}>
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
        {createSlides()}
      </SliderList>
    </SliderWrapper>
  );
}

export default Slider;
