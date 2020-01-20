import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { withdrawFunds } from "../../actions/fundsActions";
import Modal from "../modal/Modal";
import { Form, Label, Input, Button, Error } from "./WithdrawFundsStyles";
import { firestore } from "../../firebase";

function WithdrawFunds(props) {
  const { user } = props.auth;
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  function validateForm() {
    if (cardNumber.trim() === "") {
      setError("Invalid card number");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    if (amount === 0) {
      setError("Please enter the amount of money you want to withdraw");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    setError(null);

    return true;
  }

  function onFormSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const userRef = firestore.collection("users").doc(user.uid);

      userRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            const funds = doc.data().funds;
            const amountToWithdraw = amount;

            if (amountToWithdraw > funds) {
              setError(`You can't withdraw more than ${funds}$`);
              setTimeout(() => setError(null), 5000);
            } else {
              userRef.update({ funds: funds - amountToWithdraw }).then(() => {
                props.withdrawFunds(amountToWithdraw);
                props.closeModal();
              });
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }

  return (
    <Modal text={"Withdraw funds from your account."}>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="cardNumber">Card number</Label>
        <Input
          type="number"
          name="cardNumber"
          id="cardNumber"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
        <Label htmlFor="amount">Amount to withdraw</Label>
        <Input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={e => {
            if (e.target.value < 0) {
              setAmount(0);
            } else {
              setAmount(e.target.value);
            }
          }}
        />
        {error && <Error>{error}</Error>}
        <Button type="submit">Withdraw</Button>
      </Form>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { closeModal, withdrawFunds })(
  WithdrawFunds
);
