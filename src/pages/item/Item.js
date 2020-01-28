import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openSignInModal } from "../../actions/modalActions";
import { addFunds, withdrawFunds } from "../../actions/fundsActions";
import { ReactComponent as TriangleArrowIcon } from "../../assets/svg/triangle-arrow.svg";
import queryString from "query-string";
import firebase, { firestore } from "../../firebase";
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

  const { user } = props.auth;

  const [item, setItem] = useState(null);
  const [directBid, setDirectBid] = useState(0);
  const [timeLeft, setTimeLeft] = useState(100);
  const [error, setError] = useState(null);

  useInterval(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  useEffect(() => {
    const itemRef = firestore.collection("items").doc(id);

    let unsubscribe;

    itemRef
      .get()
      .then(function(itemDoc) {
        if (itemDoc.exists) {
          unsubscribe = itemRef.onSnapshot(function(itemDoc) {
            setItem(itemDoc.data());
            setTimeLeft(
              Math.round((itemDoc.data().endDate - Date.now()) / 1000)
            );
          });
        } else {
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

  function isUserLastBidder() {
    return user ? item.lastBidderId === user.uid : false;
  }

  function isItemInFavorites() {
    return user
      ? item.favorites.filter(userId => userId === user.uid).length
      : false;
  }

  function toggleFavorites() {
    if (!user) {
      props.openSignInModal();

      return;
    }

    const itemRef = firestore.collection("items").doc(id);

    if (isItemInFavorites()) {
      itemRef.update({
        favorites: firebase.firestore.FieldValue.arrayRemove(user.uid),
      });
    } else {
      itemRef.update({
        favorites: firebase.firestore.FieldValue.arrayUnion(user.uid),
      });
    }
  }

  async function validateBid(bid) {
    if (!user) {
      props.openSignInModal();

      return false;
    }

    if (timeLeft <= 0) {
      setError("This lot is closed for bidding");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    if (user.uid === item.ownerId) {
      setError("You can't bid on your own item");
      setTimeout(() => setError(null), 5000);

      return false;
    }

    const minimumBid = Math.round(
      item.bidsCount
        ? item.currentBid + item.startingBid * 0.1
        : item.startingBid
    );

    if (bid < minimumBid) {
      setError(`The next minimum bid is $${minimumBid}`);
      setTimeout(() => setError(null), 5000);

      return false;
    }

    const currentUserRef = firestore.collection("users").doc(user.uid);
    const currentUserSnapshot = await currentUserRef.get();
    const currentUserFunds = currentUserSnapshot.data().funds;

    if (isUserLastBidder()) {
      // Current user increases his own last bid
      if (bid > currentUserFunds + item.currentBid) {
        setError("You don't have enough funds for this bid");
        setTimeout(() => setError(null), 5000);

        return false;
      }
    } else {
      // Last bid wasn't made by the current user
      if (bid > currentUserFunds) {
        setError("You don't have enough funds for this bid");
        setTimeout(() => setError(null), 5000);

        return false;
      }
    }

    setError(null);
    console.log("before true");
    return true;
  }

  async function bid(n) {
    const newBid = parseInt(n, 10);
    if (await validateBid(newBid)) {
      const currentUserRef = firestore.collection("users").doc(user.uid);

      if (item.lastBidderId) {
        const lastBid = item.currentBid;
        const lastBidderRef = firestore
          .collection("users")
          .doc(item.lastBidderId);

        lastBidderRef
          .get()
          .then(function(doc) {
            if (doc.exists) {
              const lastBidderFunds = doc.data().funds;

              if (lastBidderRef.id === currentUserRef.id) {
                // Current user increases his own last bid
                lastBidderRef.update({
                  funds: lastBidderFunds - newBid + lastBid,
                });
              } else {
                // Refund money to the last bidder
                lastBidderRef.update({ funds: lastBidderFunds + lastBid });

                // Extract money from the current user's account
                currentUserRef
                  .get()
                  .then(function(doc) {
                    if (doc.exists) {
                      const currentUserFunds = doc.data().funds;

                      currentUserRef.update({
                        funds: currentUserFunds - newBid,
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
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      } else {
        // Extract money from the current user's account
        currentUserRef
          .get()
          .then(function(doc) {
            if (doc.exists) {
              const currentUserFunds = doc.data().funds;

              currentUserRef.update({
                funds: currentUserFunds - newBid,
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

      const itemRef = firestore.collection("items").doc(id);

      itemRef.update({
        bidsCount: item.bidsCount + 1,
        currentBid: newBid,
        lastBidderId: user.uid,
      });

      setDirectBid(0);
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
      <BackLink to="/explore">
        <ArrowIcon>
          <TriangleArrowIcon />
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
                <CurrentBid userBid={isUserLastBidder()}>
                  ${item.bidsCount ? item.currentBid : item.startingBid}
                </CurrentBid>
                <Bids>{item.bidsCount} bids</Bids>
              </BidsInfo>
              <BidControls>
                <QuickBid>Quick bid</QuickBid>
                <QuickBidButtons>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(
                        Math.round(
                          item.bidsCount
                            ? item.currentBid + item.startingBid * 0.1
                            : item.startingBid
                        )
                      )
                    }
                  >
                    $
                    {Math.round(
                      item.bidsCount
                        ? item.currentBid + item.startingBid * 0.1
                        : item.startingBid
                    )}
                  </QuickBidButton>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(
                        Math.round(
                          Math.round(
                            item.bidsCount
                              ? item.currentBid + item.startingBid * 0.5
                              : item.startingBid + item.startingBid * 0.5
                          )
                        )
                      )
                    }
                  >
                    $
                    {Math.round(
                      Math.round(
                        item.bidsCount
                          ? item.currentBid + item.startingBid * 0.5
                          : item.startingBid + item.startingBid * 0.5
                      )
                    )}
                  </QuickBidButton>
                  <QuickBidButton
                    type="button"
                    onClick={() =>
                      bid(
                        Math.round(
                          Math.round(
                            item.bidsCount
                              ? item.currentBid + item.startingBid
                              : item.startingBid + item.startingBid
                          )
                        )
                      )
                    }
                  >
                    $
                    {Math.round(
                      Math.round(
                        item.bidsCount
                          ? item.currentBid + item.startingBid
                          : item.startingBid + item.startingBid
                      )
                    )}
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
                  />
                  <BidButton>Place bid</BidButton>
                  {error && <Error>{error}</Error>}
                </BidDirectly>
              </BidControls>
              <AddButton type="button" onClick={toggleFavorites}>
                {isItemInFavorites()
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </AddButton>
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
    funds: state.funds,
  };
};

export default connect(mapStateToProps, {
  openSignInModal,
  addFunds,
  withdrawFunds,
})(Item);
