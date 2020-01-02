import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  height: 40px;
  padding: 0;
  margin: 0;
  font-size: 12px;
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  position: relative;
  border-left: none;
  color: ${props => props.theme.bluegrey1};

  @media screen and (min-width: 440px) {
    border-left: 1px solid ${props => props.theme.bluegrey8};
  }

  &:first-child {
    border-left: none;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  color: inherit;

  @media screen and (min-width: 440px) {
    padding: 0 14px;
  }
`;

export const Icon = styled.div`
  height: 20px;
  color: ${props => props.theme.blue1};

  & svg {
    height: 100%;
  }
`;
export const ArrowIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
  height: 16px;
  color: ${props => props.theme.blue1};

  @media screen and (min-width: 440px) {
    top: 0;
    right: 14px;
  }

  & svg {
    height: 100%;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  border: none;
  background-color: inherit;
  color: inherit;

  @media screen and (min-width: 440px) {
    padding: 0 14px;
  }
`;

export const MenuTitle = styled.span`
  display: none;

  @media screen and (min-width: 440px) {
    display: block;
  }
`;
