import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";

export const Menu = styled.div`
  position: absolute;
  z-index: 40;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.blue5};
  text-align: center;
`;

export const HeaderTitle = styled.div`
  max-width: 50%;
  padding: 14px 0;
  margin: 0;
  overflow: hidden;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BackIcon = styled(Arrow)`
  display: block;
  width: 0.625em;
  height: 1em;
  margin-right: 10px;
  color: #fff;
  font-size: 12px;
  transform: rotate(180deg);
`;

export const NextIcon = styled(Arrow)`
  display: block;
  width: 0.625em;
  height: 1em;
  color: ${props => props.theme.blue1};
  font-size: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: #fff;
`;

export const CloseIcon = styled(Cross)`
  display: block;
  width: 1em;
  height: 1em;
  color: #fff;
  font-size: 20px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 12px;
  display: flex;
  align-items: center;
  width: 60px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: #fff;
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 44px;
  color: ${props => props.theme.bluegrey1};
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${props => props.theme.bluegrey8};
  text-align: left;

  &:active {
    background-color: ${props => props.theme.bluegrey8};
  }
`;

export const MenuListLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  padding: 2px 0;
  color: inherit;
`;

export const ViewAllLink = styled(MenuListLink)`
  font-weight: 700;
`;
