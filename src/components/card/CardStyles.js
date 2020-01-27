import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: #fff;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.blue10};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.yellow2};
  font-size: 20px;

  & svg {
    display: block;
    width: 1em;
    height: 1em;
  }
`;

export const CardLink = styled(Link)`
  display: block;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const Title = styled.span`
  display: block;
  height: 54px;
  margin: 0;
  margin-top: 10px;
  color: ${props => props.theme.bluegrey1};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  white-space: pre-wrap;
  overflow: hidden;

  @media screen and (min-width: 470px) {
    height: 72px;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const BidsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CurrentBid = styled.span`
  display: block;
  padding: 2px;
  border-radius: 4px;
  margin: 0;
  color: ${props => (props.userBid ? "#fff" : "#000")};
  font-size: 16px;
  letter-spacing: 1px;
  background-color: ${props => (props.userBid ? props.theme.yellow1 : "none")};
`;

export const Bids = styled.span`
  display: block;
  color: ${props => props.theme.bluegrey4};
  font-size: 14px;

  @media screen and (min-width: 400px) {
    font-size: 14px;
  }

  @media screen and (min-width: 900px) {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const TimeLeft = styled.span`
  display: block;
  margin: 0;
  color: red;
  font-size: 14px;
`;
