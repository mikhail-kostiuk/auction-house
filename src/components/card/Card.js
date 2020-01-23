import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openSignInModal } from "../../actions/modalActions";
import firebase, { firestore } from "../../firebase";
import useInterval from "../../hooks/useInterval";
import { showApproximateTimeLeft } from "../../helpers/showTimeLeft";
import {
  CardWrapper,
  FavoriteButton,
  Icon,
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
  const { userBid } = props;
  const { user } = props.auth;
  const [item, setItem] = useState(props.item);
  const [timeLeft, setTimeLeft] = useState((item.endDate - Date.now()) / 1000);

  useInterval(
    () => {
      setTimeLeft(timeLeft - 60000);
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
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      ></path>
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
    </svg>
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

  function showBidsCount(bidsCount) {
    if (!bidsCount) {
      return null;
    } else if (bidsCount === 1) {
      return `${bidsCount} bid`;
    } else {
      return `${bidsCount} bids`;
    }
  }

  return (
    <CardWrapper>
      <FavoriteButton onClick={toggleFavorite}>
        <Icon>{favoriteIcon}</Icon>
      </FavoriteButton>
      <CardLink to={`/item?id=${item.id}`}>
        <ImageContainer>
          <Image src={item.imageUrl} alt={item.title} />
        </ImageContainer>
        <Title>{item.title}</Title>
        <Details>
          <BidsInfo>
            <CurrentBid userBid={userBid}>{`$${item.currentBid}`}</CurrentBid>
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
    items: state.items,
  };
};

export default connect(mapStateToProps, { openSignInModal })(Card);
