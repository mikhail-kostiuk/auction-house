import styled from "styled-components";

export const Page = styled.div`
  background-color: #fff;
`;

export const PageContentContainer = styled.div`
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

export const PageTitle = styled.h1`
  margin: 20px 0 10px 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    margin: 30px 0 20px 0;
  }
`;
