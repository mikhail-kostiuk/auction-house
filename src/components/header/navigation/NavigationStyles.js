import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationWrapper = styled.nav``;

export const NavigationList = styled.ul`
  position: relative;
  z-index: 20;
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const NavigationListItem = styled.li`
  display: block;
  padding: 10px 0;

  &:last-child {
    & a {
      border-right: none;
    }
  }

  &:hover {
    padding: 10px 0 9px 0;
    margin-left: -1px;
    border-right: 1px solid ${props => props.theme.bluegrey8};
    border-left: 1px solid ${props => props.theme.bluegrey8};
    background-color: ${props => props.theme.bluegrey10};

    & a {
      border-right: none;
    }
    & ul {
      display: flex;
    }

    & a::before {
      display: block;
    }
  }
`;

export const NavigationLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0 6px;
  border-right: 1px solid ${props => props.theme.bluegrey8};
  color: inherit;

  &::before {
    content: "";
    position: absolute;
    z-index: 21;
    bottom: -11px;
    left: 0;
    display: none;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${props => props.theme.bluegrey10};
    cursor: default;
  }
`;

export const NavigationNestedList = styled.ul`
  position: absolute;
  z-index: 19;
  top: 38px;
  left: -1px;
  right: -1px;
  display: none;
  flex-wrap: wrap;
  padding: 0 6px;
  border: 1px solid ${props => props.theme.bluegrey8};
  background-color: ${props => props.theme.bluegrey10};
  color: ${props => props.theme.bluegrey1};
  list-style-type: none;
`;

export const NavigationNestedListItem = styled.li`
  width: 50%;
  padding: 12px 0;
`;

export const NavigationNestedLink = styled(Link)`
  display: block;
  color: inherit;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
