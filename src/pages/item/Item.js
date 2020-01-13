import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { firestore } from "../../firebase";
import PageTemplate from "../pageTemplate/PageTemplate";
import useInterval from "../../hooks/useInterval";
import { showPreciseTimeLeft } from "../../helpers/showTimeLeft";
import {
  BackLink,
  ArrowIcon,
  PageContent,
  Title,
  DescriptionTitle,
  DescriptionText,
  ImageContainer,
  Image,
  Left,
  Right,
  LotInfo,
  StartingBid,
  TimeLeft,
  Form,
  BidsInfo,
  CurrentBid,
  Bids,
  BidControls,
  QuickBid,
  QuickBidButtons,
  QuickBidButton,
  BidDirectly,
  Label,
  Input,
  BidButton,
  Error,
  AddButton,
} from "./ItemStyles";

function Item(props) {
  const parsedQuery = queryString.parse(props.location.search);
  const { id } = parsedQuery;

  const user = props.auth.user;

  const [item, setItem] = useState(null);
  const [directBid, setDirectBid] = useState(0);
  const [error, setError] = useState(null);

  const [timeLeft, setTimeLeft] = useState(100);

  useInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  useEffect(() => {
    const itemRef = firestore.collection("items").doc(id);
    let unsubscribe;

    itemRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          unsubscribe = itemRef.onSnapshot(function(doc) {
            setItem(doc.data());
            setTimeLeft(doc.data().endDate.seconds - Date.now() / 1000);
          });
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          props.history.push("/not-found");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [id, props.history]);

  function validateBid(bid) {
    const minimumBid = Math.round(item.currentBid + item.startingBid * 0.1);

    if (bid < minimumBid) {
      setError(`The next minimum bid is $${minimumBid}`);
      setTimeout(() => setError(null), 5000);

      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function bid(n) {
    const newBid = parseInt(n, 10);

    if (validateBid(newBid)) {
      const itemRef = firestore.collection("items").doc(id);

      itemRef.update({
        bidsCount: item.bidsCount + 1,
        currentBid: newBid,
        lastBidder: user.uid,
      });
    } else {
      return;
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    bid(directBid);
  }

  return (
    <PageTemplate>
      <BackLink to="/">
        <ArrowIcon>
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg>
        </ArrowIcon>
        Back to Search
      </BackLink>
      {item && (
        <PageContent>
          <Left>
            <Title>{item.title}</Title>
            <ImageContainer>
              <Image src={item.imageUrl} alt={item.title} />
            </ImageContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{item.description}</DescriptionText>
          </Left>
          <Right>
            <LotInfo>
              <StartingBid>{`Starting bid $${item.startingBid}`}</StartingBid>
              <TimeLeft>{showPreciseTimeLeft(timeLeft)}</TimeLeft>
            </LotInfo>
            <Form onSubmit={onFormSubmit}>
              <BidsInfo>
                <CurrentBid>${item.currentBid}</CurrentBid>
                <Bids>{item.bidsCount} bids</Bids>
              </BidsInfo>
              <BidControls>
                <QuickBid>Quick bid</QuickBid>
                <QuickBidButtons>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(Math.round(item.currentBid + item.startingBid * 0.1))
                    }
                  >
                    ${Math.round(item.currentBid + item.startingBid * 0.1)}
                  </QuickBidButton>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(Math.round(item.currentBid + item.startingBid * 0.5))
                    }
                  >
                    ${Math.round(item.currentBid + item.startingBid * 0.5)}
                  </QuickBidButton>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(Math.round(item.currentBid + item.startingBid))
                    }
                  >
                    ${Math.round(item.currentBid + item.startingBid)}
                  </QuickBidButton>
                </QuickBidButtons>
                <BidDirectly>
                  <Label htmlFor="directBid">Bid directly</Label>
                  <Input
                    type="number"
                    name="directBid"
                    id="directBid"
                    value={directBid}
                    onChange={e => {
                      setDirectBid(e.target.value);
                    }}
                    error={error}
                  />
                  <BidButton>Place bid</BidButton>
                  {error && <Error>{error}</Error>}
                </BidDirectly>
              </BidControls>
              <AddButton>Add to favorites</AddButton>
            </Form>
          </Right>
        </PageContent>
      )}
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Item);
