import styled from "styled-components";
import { ReactComponent as Menu } from "../../../assets/svg/menu.svg";

export const MenuButtonWrapper = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled(Menu)`
  display: block;
  width: 1em;
  height: 1em;
  color: ${props => props.theme.blue1};
  font-size: 20px;
`;
