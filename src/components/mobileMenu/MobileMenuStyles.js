import styled from "styled-components";

export const Menu = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Header = styled.div`
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

export const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.blue1};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: #fff;
`;

export const CloseIcon = styled.svg`
  height: 20px;
  width: 20px;
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

export const BackIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.bluegrey1};
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${props => props.theme.bluegrey8};

  &:active {
    background-color: ${props => props.theme.bluegrey8};
  }
`;

export const MenuListLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  color: inherit;
  text-decoration: none;
`;
