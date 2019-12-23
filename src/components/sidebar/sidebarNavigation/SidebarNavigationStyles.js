import styled from "styled-components";

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: ${props => (props.withMargin ? "20px" : 0)};
  list-style-type: none;
  color: ${props => props.theme.blue5};
`;
export const NavigationListItem = styled.li`
  position: relative;
  padding: 8px 20px 8px 0;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.blue1};
  }
`;

export const BackIcon = styled.svg`
  width: 10px;
  height: 10px;
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 10px;
  border: none;
  background: none;
  color: ${props => props.theme.blue5};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.blue1};
  }
`;
