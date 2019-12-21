import styled from "styled-components";

export const NavigationWrapper = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const NavigationListItem = styled.li`
  position: relative;
  display: block;
  padding: 0 10px;
  border-right: 1px solid ${props => props.theme.bluegrey8};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: grey;
    & ul {
      display: block;
    }
  }
`;

export const NavigationLink = styled.a`
  display: block;
  color: inherit;
`;

export const NavigationNestedList = styled.ul`
  position: absolute;
  top: 20px;
  left: 0;
  display: none;
  width: 50vw;
  background-color: ${props => props.theme.bluegrey10};
  color: ${props => props.theme.bluegrey1};
`;
