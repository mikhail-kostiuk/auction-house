import styled from "styled-components";

export const ButtonWrapper = styled.button`
  white-space: nowrap;
  height: 40px;
  padding: 0 10px;
  border: none;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  font-size: 14px;

  &:hover {
    background-color: ${props => props.theme.blue4};
    cursor: pointer;
  }
`;
