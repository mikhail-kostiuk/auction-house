import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  height: 370px;
  background-color: #fff;

  &:hover {
    /* box-shadow: 0 4px 8px rgba(34, 34, 34, 0.08); */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.blue10};
  /* background-color: ${props => props.theme.yellow2}; */
  /* padding: 20px 10px; */
`;

export const Icon = styled.div`
  height: 26px;
  /* color: ${props => props.theme.blue10}; */
  color: ${props => props.theme.yellow2};

  & svg {
    height: 100%;
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: contain;
`;

export const Title = styled.p`
  margin: 0;
  margin-top: 20px;
  color: ${props => props.theme.bluegrey1};
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const CurrentBid = styled.p`
  margin: 0;
  color: #000;
  font-size: 18px;
`;

export const TimeLeft = styled.p`
  margin: 0;
  color: red;
`;
