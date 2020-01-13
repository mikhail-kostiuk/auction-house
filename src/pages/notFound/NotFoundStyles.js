import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorCode = styled.h1`
  margin: 0;
  margin-top: 70px;
  font-size: 120px;
  font-weight: 400;
`;

export const ErrorText = styled.p`
  margin: 0;
  margin-bottom: 80px;
  color: ${props => props.theme.bluegrey3};
  font-size: 18px;
  text-align: center;
`;
