import React, { useState } from "react";
import useInterval from "../../../hooks/useInterval";
import { showApproximateTimeLeft } from "../../../helpers/showTimeLeft";
import {
  SlideWrapper,
  ImageContainer,
  Image,
  Title,
  DetailsContainer,
  Details,
  CurrentBid,
  TimeLeft,
  ItemLink,
} from "./SlideStyles";

function Slide(props) {
  const { id, imageUrl, title, currentBid, endDate } = props.item;
  const [timeLeft, setTimeLeft] = useState(endDate.seconds - Date.now() / 1000);

  useInterval(() => {
    setTimeLeft(timeLeft - 60000);
  }, 60000);

  return (
    <SlideWrapper>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Title>Hand Painted Asian Lacquer jewelry Box</Title>
      <DetailsContainer>
        <Details>
          <CurrentBid>${currentBid}</CurrentBid>
          <TimeLeft>{showApproximateTimeLeft(timeLeft)}</TimeLeft>
        </Details>
        <ItemLink to={`/item?id=${id}`}>Explore</ItemLink>
      </DetailsContainer>
    </SlideWrapper>
  );
}

export default Slide;
