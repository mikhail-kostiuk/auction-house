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

function Card(props) {
  const { imageUrl, title, currentBid, timeLeft } = props;
  console.log(imageUrl);
  return (
    <CardWrapper>
      <CardLink href="#">
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <Title>{title}</Title>
        <Details>
          <CurrentBid>{`$${currentBid}`}</CurrentBid>
          <TimeLeft>{timeLeft.seconds}</TimeLeft>
        </Details>
      </CardLink>
    </CardWrapper>
  );
}

export default Card;
