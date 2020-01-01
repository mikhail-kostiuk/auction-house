import styled from "styled-components";

export const GalleryWrapper = styled.div`
  margin-left: 0;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -10px;
  list-style-type: none;
`;

export const GalleryItem = styled.li`
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 470px) {
    width: 50%;
  }
  @media screen and (min-width: 1100px) {
    width: 33.33333%;
  }
`;
