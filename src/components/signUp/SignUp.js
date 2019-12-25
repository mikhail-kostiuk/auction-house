import React from "react";
import { SignUpForm, Label, Input, Button, BottomText, LinkButton } from "./SignUpStyles";
import Modal from "../modal/Modal";

function SignUp(props) {
  return (
    <Modal
      text={"Sign up and begin your treasure hunt."}
      close={props.closeSignUp}
    >
      <SignUpForm>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" name="email" id="email" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input type="password" name="confirmPassword" id="confirmPassword" />
        <Button type="submit">Sign up</Button>
      </SignUpForm>
      <BottomText>
        Already have an account? <LinkButton>Log In</LinkButton>
      </BottomText>
    </Modal>
  );
}

export default SignUp;
