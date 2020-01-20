import React, { useState } from "react";
import { connect } from "react-redux";
import { openSignInModal, closeModal } from "../../actions/modalActions";
import { auth, firestore } from "../../firebase";
import {
  SignUpForm,
  Label,
  Input,
  Button,
  BottomText,
  LinkButton,
} from "./SignUpStyles";
import Modal from "../modal/Modal";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function isInputValid() {
    if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  }

  function onSubmitForm(e) {
    e.preventDefault();

    if (isInputValid()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(function(createdUser) {
          firestore
            .collection("users")
            .doc(createdUser.user.uid)
            .set({
              uid: createdUser.user.uid,
              email: createdUser.user.email,
              favorites: [],
            });
          props.closeModal();
        })
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  }

  return (
    <Modal
      text={"Sign up and begin your treasure hunt."}
      close={props.closeSignUp}
    >
      <SignUpForm onSubmit={onSubmitForm}>
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
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Sign up</Button>
      </SignUpForm>
      <BottomText>
        Already have an account?{" "}
        <LinkButton onClick={props.openSignInModal}>Sign In</LinkButton>
      </BottomText>
    </Modal>
  );
}

export default connect(null, { openSignInModal, closeModal })(SignUp);
