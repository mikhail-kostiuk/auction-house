import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import {
  SliderWrapper,
  Title,
  List,
  ButtonPrev,
  ButtonNext,
  PrevIcon,
  NextIcon,
  SlideContainer,
} from "./SliderStyles";
import Slide from "./slide/Slide";
import useInterval from "../../hooks/useInterval";

function Slider(props) {
  const { title, order, delay } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([]);
  const [slideDirection, setSlideDirection] = useState("right");
  const [autoSlideActive, setAutoSlideActive] = useState(true);

  const totalSlides = 12;

  useEffect(() => {
    const resultSet = [];
    let query;

    switch (order) {
      case "endDate":
        query = firestore.collection("items").orderBy("endDate", "asc");
        break;
      case "bidsCount":
        query = firestore.collection("items").where("bidsCount", "==", 0);
        break;

      default:
        break;
    }

    query
      .where("closed", "==", false)
      .limit(totalSlides)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          resultSet.push({ id: doc.id, ...doc.data() });
        });
        setItems(resultSet);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, [order]);

  useInterval(() => {
    if (!autoSlideActive) {
      return;
    }

    if (currentSlide <= 0) {
      setSlideDirection("right");
    } else if (currentSlide >= 8) {
      setSlideDirection("left");
    }

    if (slideDirection === "left") {
      slideToRight();
    } else {
      slideToLeft();
    }
  }, delay);

  function slideToRight() {
    if (currentSlide === 0) {
      return;
    }

    setCurrentSlide(currentSlide - 1);
  }

  function slideToLeft() {
    if (currentSlide === totalSlides - 4) {
      return;
    }

    setCurrentSlide(currentSlide + 1);
  }

  return (
    <SliderWrapper>
      <Title>{title}</Title>
      <List
        currentSlide={currentSlide}
        onClick={() => {
          setAutoSlideActive(false);
          setTimeout(() => setAutoSlideActive(true), 60000);
        }}
      >
        <ButtonPrev onClick={slideToRight} currentSlide={currentSlide}>
          <PrevIcon />
        </ButtonPrev>
        <ButtonNext
          onClick={slideToLeft}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        >
          <NextIcon />
        </ButtonNext>
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
