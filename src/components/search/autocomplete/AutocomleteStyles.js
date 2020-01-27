import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputContainer = styled.div`
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

export const SearchIconContainer = styled.div`
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
  background-color: ${props => props.theme.blue1};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
`;

export const SearchIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const HitsList = styled.ul`
  position: absolute;
  z-index: 50;
  top: 45px;
  left: 0;
  width: 100%;
  padding: 0;
  border: 1px solid ${props => props.theme.bluegrey8};
  margin: 0;
  list-style-type: none;
  max-height: 612px;
  overflow-y: scroll;
`;

export const Hit = styled.li`
  display: flex;
  width: 100%;
  height: 102px;
  border-top: 1px solid ${props => props.theme.bluegrey8};
  background-color: #fff;

  &:first-child {
    border-top: none;
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  flex-basis: 102px;
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.bluegrey8};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const Details = styled.div`
  padding: 0 8px;
`;

export const Title = styled.span`
  display: block;
  overflow-y: hidden;
  height: 30px;
  margin-top: 4px;
  margin-bottom: 12px;
  color: black;
  font-size: 15px;
`;

export const Description = styled.p`
  overflow-y: hidden;
  height: 46px;
  margin: 0;
  color: ${props => props.theme.bluegrey4};
  font-size: 13px;
  line-height: 15px;
`;
