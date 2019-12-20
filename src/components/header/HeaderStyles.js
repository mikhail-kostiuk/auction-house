import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.bluegrey10};
  border-bottom: 1px solid ${props => props.theme.bluegrey8};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;

export const HeaderLogo = styled.div`
  margin-bottom: 4px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 8px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  order: 2;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    order: 1;
    flex-grow: 1;
    width: auto;
    margin-top: 0;
    margin-left: 22px;
  }
`;
