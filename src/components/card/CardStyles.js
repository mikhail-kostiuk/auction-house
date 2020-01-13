import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  background-color: #fff;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.blue10};
`;

export const Icon = styled.div`
  height: 20px;
  color: ${props => props.theme.yellow2};

  & svg {
    height: 100%;
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
  height: 72px;
  margin: 0;
  margin-top: 10px;
  color: ${props => props.theme.bluegrey1};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  white-space: pre-wrap;
  overflow: hidden;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BidsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentBid = styled.span`
  display: block;
  margin: 0;
  color: #000;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const Bids = styled.span`
  display: block;
  margin-left: 10px;
  color: ${props => props.theme.bluegrey4};
  font-size: 14px;
`;

export const TimeLeft = styled.span`
  display: block;
  margin: 0;
  color: red;
  font-size: 14px;
`;
