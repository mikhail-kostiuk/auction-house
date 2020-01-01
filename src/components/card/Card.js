import React from "react";
import {
  CardWrapper,
  CardLink,
  ImageContainer,
  Image,
  Title,
  Details,
  CurrentBid,
  TimeLeft,
} from "./CardStyles";

function Card() {
  return (
    <CardWrapper>
      <CardLink href="#">
        <ImageContainer>
          <Image src="https://placeimg.com/640/480/arch" alt="Lot name" />
        </ImageContainer>
        <Title>Hand Painted Asian Lacquer jewelry Box</Title>
        <Details>
          <CurrentBid>$1200</CurrentBid>
          <TimeLeft>1 Day Left</TimeLeft>
        </Details>
      </CardLink>
    </CardWrapper>
  );
}

export default Card;
