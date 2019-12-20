import styled from "styled-components";

export const ButtonWrapper = styled.button`
  white-space: nowrap;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  font-size: 14px;
`;
