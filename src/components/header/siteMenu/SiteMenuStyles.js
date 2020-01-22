import styled from "styled-components";
import { Link } from "react-router-dom";

export const SiteMenuWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.bluegrey8};
  background-color: ${props => props.theme.bluegrey9};
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 10px;

  @media screen and (min-width: 768px) {
    padding: 5px 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.bluegrey3};
  font-size: 13px;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
`;

export const MenuLink = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
