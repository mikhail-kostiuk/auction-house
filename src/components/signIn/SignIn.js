import React, { useState } from "react";
import { connect } from "react-redux";
import { openSignUpModal, closeModal } from "../../actions/modalActions";
import { auth } from "../../firebase";
import Modal from "../modal/Modal";
import {
  SignInForm,
  Label,
  Input,
  Error,
  Button,
  BottomText,
  LinkButton,
} from "./SignInStyles";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function onSubmitForm(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        props.closeModal();
      })
      .catch(function(error) {
        let errorMessage = error.message;

        setError(errorMessage);
        setTimeout(() => setError(null), 5000);
      });
  }

  return (
    <Modal text={"Sign in and begin your treasure hunt."}>
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
        {error && <Error>{error}</Error>}
        <Button type="submit">Sign In</Button>
      </SignInForm>
      <BottomText>
        Don't have an account?{" "}
        <LinkButton onClick={props.openSignUpModal}>Sign Up</LinkButton>
      </BottomText>
    </Modal>
  );
}

export default connect(null, { openSignUpModal, closeModal })(SignIn);
