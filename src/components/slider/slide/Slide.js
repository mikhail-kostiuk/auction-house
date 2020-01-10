import React from "react";
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
  const { item } = props;

  return (
    <SlideWrapper>
      <ImageContainer>
        <Image src={item.imageUrl} alt={item.title} />
      </ImageContainer>
      <Title>Hand Painted Asian Lacquer jewelry Box</Title>
      <DetailsContainer>
        <Details>
          <CurrentBid>${item.currentBid}</CurrentBid>
          <TimeLeft>1 Day Left</TimeLeft>
        </Details>
        <ItemLink to={`/item?id=${item.id}`}>Explore</ItemLink>
      </DetailsContainer>
    </SlideWrapper>
  );
}

export default Slide;
