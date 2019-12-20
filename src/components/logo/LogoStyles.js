import styled from "styled-components";

export const LogoWrapper = styled.div`
  & span:nth-child(1) {
    color: #000;
    font-size: 18px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  & span:nth-child(2) {
    color: ${props => props.theme.blue5};
    font-weight: 700;
    font-size: 22px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
