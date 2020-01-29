import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openSignInModal } from "../../actions/modalActions";
import firebase, { firestore } from "../../firebase";
import useInterval from "../../hooks/useInterval";
import { showApproximateTimeLeft } from "../../helpers/showTimeLeft";
import {
  CardWrapper,
  FavoriteButton,
  HeartIcon,
  HollowHeartIcon,
  CardLink,
  ImageContainer,
  Image,
  Title,
  Details,
  BidsInfo,
  Bids,
  CurrentBid,
  TimeLeft,
} from "./CardStyles";

function Card(props) {
  const { user } = props.auth;
  const [item, setItem] = useState(props.item);
  const [timeLeft, setTimeLeft] = useState(
    Math.round((item.endDate - Date.now()) / 1000)
  );

  useInterval(
    () => {
      setTimeLeft(timeLeft - 60);
    },
    item.closed ? null : 60000
  );

  useEffect(() => {
    const itemRef = firestore.collection("items").doc(item.id);

    let unsubscribe;

    itemRef
      .get()
      .then(function(itemDoc) {
        if (itemDoc.exists) {
          const itemData = itemDoc.data();

          if (itemData.closed) {
            setItem({ id: itemDoc.id, ...itemData });
          } else {
            unsubscribe = itemRef.onSnapshot(function(itemDoc) {
              setItem({ id: itemDoc.id, ...itemDoc.data() });
            });
          }
        } else {
          setItem(null);
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
  }, [item.id]);

  function isItemInFavorites() {
    return user
      ? item.favorites.filter(userId => userId === user.uid).length
      : false;
  }

  const favoriteIcon = isItemInFavorites() ? (
    <HeartIcon />
  ) : (
    <HollowHeartIcon />
  );

  function toggleFavorite(e) {
    e.preventDefault();

    if (!user) {
      props.openSignInModal();

      return;
    }

    const itemRef = firestore.collection("items").doc(item.id);

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

  function isUserLastBidder(lastBidderId) {
    if (!user) {
      return false;
    }
    return lastBidderId === user.uid;
  }

  function showBidsCount(bidsCount) {
    if (bidsCount === 1) {
      return `${bidsCount} bid`;
    } else {
      return `${bidsCount} bids`;
    }
  }

  return (
    <CardWrapper>
      <FavoriteButton onClick={toggleFavorite}>{favoriteIcon}</FavoriteButton>
      <CardLink to={`/item?id=${item.id}`}>
        <ImageContainer>
          <Image src={item.imageUrl} alt={item.title} />
        </ImageContainer>
        <Title>{item.title}</Title>
        <Details>
          <BidsInfo>
            <CurrentBid userBid={isUserLastBidder(item.lastBidderId)}>{`$${
              item.bidsCount ? item.currentBid : item.startingBid
            }`}</CurrentBid>
            <Bids>{showBidsCount(item.bidsCount)}</Bids>
          </BidsInfo>
          <TimeLeft>{showApproximateTimeLeft(timeLeft)}</TimeLeft>
        </Details>
      </CardLink>
    </CardWrapper>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { openSignInModal })(Card);
