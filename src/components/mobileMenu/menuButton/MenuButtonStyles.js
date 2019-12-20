import styled from "styled-components";

export const MenuButtonWrapper = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  color: ${props => props.theme.blue1};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
