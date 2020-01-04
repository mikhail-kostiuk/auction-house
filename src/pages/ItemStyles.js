import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
  /* background-color: ${props => props.theme.bluegrey10}; */
`;

export const PageContentContainer = styled.div`
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  width: auto;
  align-items: center;
  color: ${props => props.theme.bluegrey5};
  font-size: 14px;
  line-height: 18px;
`;

export const ArrowIcon = styled.div`
  height: 14px;
  margin-bottom: -4px;
  transform: rotate(90deg);

  & svg {
    height: 100%;
  }
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.h1`
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  color: ${props => props.theme.bluegrey1};
  font-size: 32px;
  font-weight: 400;
`;

export const DescriptionTitle = styled.span`
  display: block;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${props => props.theme.bluegrey8};
  color: ${props => props.theme.bluegrey3};
  text-transform: uppercase;
`;

export const DescriptionText = styled.p`
  color: ${props => props.theme.bluegrey3};
`;

export const Left = styled.div`
  width: 48%;
`;

export const Right = styled.div`
  width: 48%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: contain;
`;

export const LotInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StartingBid = styled.span`
  color: ${props => props.theme.bluegrey3};
`;

export const TimeLeft = styled.span`
  color: red;
`;

export const Form = styled.form`
  padding: 20px;
  margin-top: 20px;
  background-color: ${props => props.theme.bluegrey10};
  border: 1px solid ${props => props.theme.bluegrey8};
`;

export const BidsInfo = styled.div``;

export const CurrentBid = styled.span`
  font-size: 28px;
`;

export const Bids = styled.span`
  display: block;
  padding: 20px;
  margin-left: 30px;
  background-color: #fff;
`;
