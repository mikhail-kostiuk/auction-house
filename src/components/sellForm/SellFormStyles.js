import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
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

export const Select = styled.select`
  height: 40px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.bluegrey8};

  &:focus {
    border: 1px solid ${props => props.theme.blue5};
  }
`;

export const TextArea = styled.textarea`
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.bluegrey8};

  &:focus {
    border: 1px solid ${props => props.theme.blue5};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: contain;
`;

export const Error = styled.span`
  display: block;
  margin-top: 30px;
  text-align: center;
  color: red;
`;

export const Button = styled.button`
  white-space: nowrap;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  margin-top: 20px;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.blue4};
    cursor: pointer;
  }
`;
