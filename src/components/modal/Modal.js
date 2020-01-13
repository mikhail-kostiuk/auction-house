import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalAction";
import Logo from "../logo/Logo";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  CloseIcon,
  LogoContainer,
  ModalText,
} from "./ModalStyles";

function Modal(props) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton>
          <CloseIcon onClick={props.closeModal}>×</CloseIcon>
        </CloseButton>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ModalText>{props.text}</ModalText>
        {props.children}
      </ModalContainer>
    </ModalOverlay>
  );
}

export default connect(null, { closeModal })(Modal);
