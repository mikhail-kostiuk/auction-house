import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { addFunds } from "../../actions/fundsActions";
import Modal from "../modal/Modal";
import { firestore } from "../../firebase";
import {
  Form,
  Label,
  Input,
  CardDetails,
  FormFieldContainer,
  Button,
  Error,
} from "./AddFundsStyles";

function AddFunds(props) {
  const { user } = props.auth;
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  function validateForm() {
    if (cardNumber.trim() === "") {
      setError("Invalid card number");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    if (expiryDate.trim() === "") {
      setError("Please enter expiry date");
      setTimeout(() => setError(null), 5000);

      return false;
    }
    if (cvv.trim() === "") {
      setError("Please enter cvv number");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    if (amount === 0) {
      setError("Please enter the amount of money you want to add");
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
            const amountToAdd = parseInt(amount, 10);

            userRef.update({ funds: funds + amountToAdd }).then(() => {
              props.addFunds(amountToAdd);
              props.closeModal();
            });
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
    <Modal text={"Add funds to your account."}>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="cardNumber">Card number</Label>
        <Input
          autoFocus
          type="number"
          name="cardNumber"
          id="cardNumber"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
        <CardDetails>
          <FormFieldContainer>
            <Label htmlFor="expiryDate">Expiry date</Label>
            <Input
              placeholder="MM/YY"
              type="text"
              name="expiryDate"
              id="expiryDate"
              value={expiryDate}
              onChange={e => setExpiryDate(e.target.value)}
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              type="text"
              name="cvv"
              id="cvv"
              value={cvv}
              onChange={e => setCvv(e.target.value)}
            />
          </FormFieldContainer>
        </CardDetails>
        <Label htmlFor="amount">Amount to add</Label>
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
        <Button type="submit">Add</Button>
      </Form>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { closeModal, addFunds })(AddFunds);
