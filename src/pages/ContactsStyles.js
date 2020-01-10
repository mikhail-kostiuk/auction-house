import styled from "styled-components";

export const ContactsWrapper = styled.div`
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

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContactsColumn = styled.div`
  width: 48%;
`;

export const Intro = styled.p`
  margin: 0;
  margin-bottom: 60px;
  line-height: 24px;
`;

export const ContactTitle = styled.h2`
  margin: 0;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  /* color: #65605b; */
  color: ${props => props.theme.bluegrey1};
`;

export const ContactText = styled.p`
  margin: 0;
  margin-top: 10px;
  color: ${props => props.theme.bluegrey4};
`;

export const Map = styled.div`
  width: 48%;

  & iframe {
    width: 100%;
  }
`;
