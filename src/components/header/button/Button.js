import React from "react";
import { ButtonWrapper } from "./ButtonStyles";

function Button(props) {
  return <ButtonWrapper>{props.text}</ButtonWrapper>;
}

export default Button;
