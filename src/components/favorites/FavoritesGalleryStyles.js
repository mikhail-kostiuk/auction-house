import styled from "styled-components";

export const FavoritesWrapper = styled.div`
  width: 100%;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  padding: 0;
  margin: 0 -10px;
  list-style-type: none;
`;

export const FavoritesItem = styled.li`
  width: 100%;
  /* flex-shrink: 0; */
  padding: 10px;

  @media screen and (min-width: 470px) {
    width: 50%;
  }
  @media screen and (min-width: 1100px) {
    width: 33.33333%;
  }
`;
