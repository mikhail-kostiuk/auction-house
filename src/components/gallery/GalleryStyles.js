import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
`;

export const GalleryTitle = styled.h1`
  margin: 20px 0 10px 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    margin: 30px 0 20px 0;
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

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  background-color: ${props => props.theme.bluegrey10};
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 44px;
  padding: 0 10px;
  border: none;
  background-color: ${props => props.theme.bluegrey9};
  color: ${props => props.theme.bluegrey5};
  font-size: 18px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.bluegrey1};
  }

  &:hover svg {
    color: ${props => props.theme.bluegrey1};
  }

  &:disabled {
    background-color: ${props => props.theme.bluegrey10};
    color: ${props => props.theme.bluegrey7};
    cursor: default;
  }
  &:disabled svg {
    color: ${props => props.theme.bluegrey7};
  }
`;

export const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.bluegrey5};
`;

export const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  color: ${props => props.theme.bluegrey1};
`;
