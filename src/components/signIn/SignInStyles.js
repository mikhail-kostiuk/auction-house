import styled from "styled-components";

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: 20px;
  padding: 0 10px;

  @media screen and (min-width: 520px) {
    padding: 0;
  }
`;
export const Label = styled.label`
  margin-top: 20px;
  color: ${props => props.theme.bluegrey3};
  font-size: 14px;
  text-transform: uppercase;

  &:first-child {
    margin-top: 0;
  }
`;
export const Input = styled.input`
  height: 40px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.bluegrey8};

  &:focus {
    border: 1px solid ${props => props.theme.blue5};
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 20px;
  text-align: center;
  color: red;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  margin-top: 20px;
  color: #fff;
  background-color: ${props => props.theme.yellow2};
  text-transform: uppercase;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
`;

export const BottomText = styled.p`
  margin-top: auto;
  color: ${props => props.theme.bluegrey3};
  font-size: 14px;
`;

export const LinkButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${props => props.theme.blue5};
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
`;
