import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.bluegrey10};
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
  height: 44px;
  padding: 0 10px;
  border: none;
  background-color: ${props => props.theme.bluegrey9};
  color: ${props => props.theme.bluegrey5};
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    width: 120px;
    font-size: 18px;
  }

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

const IconStyles = css`
  display: block;
  width: 0.625em;
  height: 1em;
  font-size: 20px;
`;

export const PrevIcon = styled(Arrow)`
  ${IconStyles}
  transform: rotate(180deg);
`;

export const NextIcon = styled(Arrow)`
  ${IconStyles}
`;

export const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  color: ${props => props.theme.bluegrey1};
  font-size: 14px;

  @media screen and (min-width: 640px) {
    font-size: 16px;
  }
`;
