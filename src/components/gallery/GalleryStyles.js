import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
`;

export const GalleryTitle = styled.h1`
  margin: 10px 0 10px 0;
  background-color: #fff;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    margin: 20px 0 20px 0;
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  padding: 0;
  margin: 10px -10px 0 -10px;
  list-style-type: none;
`;

export const GalleryItem = styled.li`
  width: calc(100% / 2);
  padding: 10px;

  @media screen and (min-width: 620px) {
    width: calc(100% / 3);
  }
  @media screen and (min-width: 768px) {
    width: ${props => 100 / (props.maxColumns - 1)}%;
  }
  @media screen and (min-width: 900px) {
    width: ${props => 100 / props.maxColumns}%;
  }
`;
