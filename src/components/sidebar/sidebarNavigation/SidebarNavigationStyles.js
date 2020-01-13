import styled from "styled-components";

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
  padding: 8px 20px 8px 0;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.bluegrey1};
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
  color: #0097ba;
  cursor: pointer;

  &:hover {
    color: #00677f;
  }
`;
