import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccountSubmenuList = styled.ul`
  position: absolute;
  top: 56px;
  right: 0;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  padding: 0;
  margin: 0;
  border: 1px solid ${props => props.theme.bluegrey8};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  list-style-type: none;
`;

export const Arrow = styled.div`
  position: absolute;
  top: -16px;
  right: 30px;
  display: block;
  width: 0;
  height: 0;
  margin-left: -11px;
  border-width: 16px;
  border-top-width: 0;
  border-color: transparent;
  border-bottom-color: ${props => props.theme.bluegrey8};
  border-style: solid;

  &::after {
    content: " ";
    position: absolute;
    top: 1px;
    display: block;
    width: 0;
    height: 0;
    margin-left: -16px;
    border-width: 16px;
    border-top-width: 0;
    border-color: transparent;
    border-bottom-color: #fff;
    border-style: solid;
  }
`;

export const SubmenuListItem = styled.li`
  width: 100%;

  color: ${props => props.theme.bluegrey1};
  font-size: 14px;
  text-align: start;

  &:hover {
    background-color: ${props => props.theme.blue10};
  }
`;

export const SubmenuLink = styled(Link)`
  display: block;
  padding: 20px;
  color: inherit;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 20px;
  border: none;
  background: none;
  color: ${props => props.theme.blue5};
  text-align: start;
  font-weight: 700;
  cursor: pointer;
`;
