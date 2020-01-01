import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  SignInForm,
  Label,
  Input,
  Button,
  BottomText,
  LinkButton,
} from "./SignInStyles";
import Modal from "../modal/Modal";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitForm(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        props.closeSignIn();
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <Modal
      text={"Sign in and begin your treasure hunt."}
      close={props.closeSignIn}
    >
      <SignInForm onSubmit={onSubmitForm}>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Button type="submit">Sign In</Button>
      </SignInForm>
      <BottomText>
        Don't have an account?{" "}
        <LinkButton
          onClick={() => {
            props.closeSignIn();
            props.openSignUp();
          }}
        >
          Sign Up
        </LinkButton>
      </BottomText>
    </Modal>
  );
}

export default SignUp;
