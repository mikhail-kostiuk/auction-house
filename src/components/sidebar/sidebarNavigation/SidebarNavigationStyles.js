import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: ${props => (props.nested ? "20px" : 0)};
  color: ${props => props.theme.bluegrey5};
  font-size: 15px;
  list-style-type: none;
`;
export const NavigationListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 8px 20px 8px 0;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.bluegrey1};
  }
`;

const IconStyles = css`
  display: block;
  width: 0.625em;
  height: 1em;
  font-size: 10px;
`;

export const BackIcon = styled(Arrow)`
  ${IconStyles}
  margin-right: 6px;
  transform: rotate(180deg);
`;

export const NextIcon = styled(Arrow)`
  ${IconStyles}
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 10px;
  border: none;
  background: none;
  color: ${props => props.theme.bluegrey5};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.bluegrey1};
  }
`;
