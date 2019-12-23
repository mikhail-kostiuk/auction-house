import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  color: #525f7f;
  font-size: 16px;

  &:focus {
    border: 1px;
    outline-color: ${props => props.theme.blue5};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
  background-color: ${props => props.theme.blue5};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${props => props.theme.blue4};
  }
`;

export const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
