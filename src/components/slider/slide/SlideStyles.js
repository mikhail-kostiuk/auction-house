import styled from "styled-components";
import { Link } from "react-router-dom";

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  height: 180px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const Title = styled.h2`
  padding-top: 10px;
  border-top: 1px solid ${props => props.theme.bluegrey8};
  margin: 0;
  margin-top: 12px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BidDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentBid = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 16px;
  color: ${props => (props.userBid ? "#fff" : "#000")};
  padding: ${props => (props.userBid ? "2px 4px" : 0)};
  background-color: ${props => (props.userBid ? props.theme.yellow1 : "none")};
`;

export const BidsCount = styled.span`
  display: block;
  padding: 1px 4px;
  margin-left: 8px;
  border-radius: 2px;
  background-color: ${props => props.theme.blue10};
  color: ${props => props.theme.greyblue8};
  font-size: 13px;
`;

export const TimeLeft = styled.span`
  display: block;
  color: red;
  font-size: 13px;
`;

export const ItemLinkContainer = styled.div``;

export const ItemLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: ${props => props.theme.blue5};
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.blue4};
  }
`;
