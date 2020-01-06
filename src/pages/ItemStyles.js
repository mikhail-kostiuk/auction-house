import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div``;

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
  width: 56%;
`;

export const Right = styled.div`
  width: 40%;
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
  padding: 30px;
  margin-top: 20px;
  background-color: ${props => props.theme.bluegrey10};
  border: 1px solid ${props => props.theme.bluegrey8};
`;

export const BidsInfo = styled.div`
  display: flex;
`;

export const CurrentBid = styled.span`
  font-size: 28px;
`;

export const Bids = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  margin-left: 20px;
  border-radius: 20px;
  background-color: #fff;
`;

export const BidControls = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid ${props => props.theme.bluegrey8};
`;

export const QuickBid = styled.span`
  display: block;
  margin-top: 30px;
  color: ${props => props.theme.bluegrey3};
  text-transform: uppercase;
`;

export const QuickBidButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const QuickBidButton = styled.button`
  white-space: nowrap;
  width: 30%;
  height: 40px;
  padding: 0 10px;
  border: none;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  font-size: 18px;

  &:hover {
    background-color: ${props => props.theme.blue4};
    cursor: pointer;
  }
`;

export const BidDirectly = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 30px;
  color: ${props => props.theme.bluegrey3};
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-top: 20px;
  height: 40px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.bluegrey8};

  &:focus {
    border: 1px;
    outline-color: ${props => props.theme.blue5};
  }
`;

export const BidButton = styled.button`
  white-space: nowrap;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  margin-top: 10px;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.blue4};
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  white-space: nowrap;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  margin-top: 30px;
  color: ${props => props.theme.blue5};
  border: 1px solid ${props => props.theme.blue5};
  background-color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.blue5};
    color: #fff;
    cursor: pointer;
  }
`;
