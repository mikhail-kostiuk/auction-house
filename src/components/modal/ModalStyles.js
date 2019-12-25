import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(41, 41, 41, 0.5);
  z-index: 20;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 550px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: #fff;

  @media screen and (min-width: 520px) {
    width: 500px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: none;
  font-size: 40px;
  color: ${props => props.theme.blue1};
  cursor: pointer;
`;

export const CloseIcon = styled.span`
  display: block;
`;

export const LogoContainer = styled.div`
  margin-top: 20px;
`;
export const ModalText = styled.p`
  padding: 0 10px;
  margin: 0;
  margin-top: 28px;
  font-size: 20px;
  color: ${props => props.theme.bluegrey1};
  text-align: center;
`;
