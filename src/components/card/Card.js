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
  const { id, imageUrl, title, currentBid, timeLeft } = props;
  return (
    <CardWrapper>
      <CardLink to={`/item?id=${id}`}>
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
