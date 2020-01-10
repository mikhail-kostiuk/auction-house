import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContactsColumn = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
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
  color: ${props => props.theme.bluegrey1};
`;

export const ContactText = styled.p`
  margin: 0;
  margin-top: 10px;
  color: ${props => props.theme.bluegrey4};
`;

export const Map = styled.div`
  width: 100%;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 48%;
  }

  & iframe {
    width: 100%;
  }
`;
