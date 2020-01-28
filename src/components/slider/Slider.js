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

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(6);
  const [items, setItems] = useState([]);
  // const [slideDirection, setSlideDirection] = useState("left");

  const totalSlides = 16;

  useEffect(() => {
    const resultSet = [];
    let query;

    switch (props.order) {
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
      });
  }, [props.order]);

  function slideToRight() {
    setCurrentSlide(currentSlide - 1);
  }

  function slideToLeft() {
    setCurrentSlide(currentSlide + 1);
  }

  return (
    <SliderWrapper totalSlides={totalSlides} currentSlide={currentSlide}>
      <Title>{props.title}</Title>
      <List totalSlides={totalSlides} currentSlide={currentSlide}>
        <ButtonPrev
          onClick={slideToRight}
          totalSlides={totalSlides}
          currentSlide={currentSlide}
        >
          <PrevIcon />
        </ButtonPrev>
        <ButtonNext onClick={slideToLeft} currentSlide={currentSlide}>
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
