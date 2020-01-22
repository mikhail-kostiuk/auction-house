import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.bluegrey10};
  border-top: 1px solid ${props => props.theme.bluegrey8};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SocialMediaLink = styled.a`
  display: block;
  margin-right: 16px;
  color: ${props => props.theme.blue1};
  cursor: pointer;
`;

export const Icon = styled.div`
  font-size: 40px;

  & svg {
    display: block;
    width: 1em;
    height: 1em;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  margin-top: 20px;
  color: ${props => props.theme.bluegrey3};
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
