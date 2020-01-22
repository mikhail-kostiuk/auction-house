import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.bluegrey10};
  border-bottom: 1px solid ${props => props.theme.bluegrey8};
`;

export const ContentContainer = styled.div`
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

export const LogoContainer = styled.div`
  margin-bottom: 4px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 2px;
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

export const AccountActions = styled.div`
  order: 1;
  margin-left: auto;
  display: flex;

  @media screen and (min-width: 768px) {
    order: 2;
    margin-left: 14px;
  }
`;

export const AuthButtons = styled.div`
  & button {
    margin-left: 8px;
  }
`;

export const NavigationWrapper = styled.div`
  display: none;
  order: 3;
  width: 100%;
  border-top: 1px solid ${props => props.theme.bluegrey8};
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const NavigationContainer = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;
