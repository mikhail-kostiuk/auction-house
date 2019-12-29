import React from "react";
import { ButtonWrapper } from "./ButtonStyles";

function Button(props) {
  return <ButtonWrapper onClick={props.onClick}>{props.text}</ButtonWrapper>;
}

export default Button;
