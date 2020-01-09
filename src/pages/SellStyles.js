import styled from "styled-components";

export const SellWrapper = styled.div`
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
  margin: 20px 0;
  font-size: 24px;
  font-weight: 400;
`;

export const PageContent = styled.div`
  display: flex;
  width: 100%;
`;
