import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 100vh;
`;

// For ie11
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContentContainer = styled.div`
  width: 100%;
  padding: 10px 10px 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px 30px 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;

export const PageTitle = styled.h1`
  margin: 10px 0 10px 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    margin: 20px 0 20px 0;
  }
`;
export const FooterContainer = styled.div`
  margin-top: auto;
`;
