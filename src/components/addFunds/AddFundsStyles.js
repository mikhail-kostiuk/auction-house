import styled from "styled-components";

export const Form = styled.form`
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
  width: 100%;
  height: 40px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.bluegrey8};

  &:focus {
    border: 1px solid ${props => props.theme.blue5};
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FormFieldContainer = styled.div`
  width: 48%;
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

export const Error = styled.span`
  display: block;
  margin-top: 20px;
  text-align: center;
  color: red;
`;
