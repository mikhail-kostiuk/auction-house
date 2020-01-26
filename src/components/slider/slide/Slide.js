import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import useInterval from "../../../hooks/useInterval";
import { firestore } from "../../../firebase";
import { showApproximateTimeLeft } from "../../../helpers/showTimeLeft";
import {
  SlideWrapper,
  ImageContainer,
  Image,
  Title,
  DetailsContainer,
  Details,
  CurrentBid,
  TimeLeft,
  ItemLink,
} from "./SlideStyles";

function Slide(props) {
  const { user } = props.auth;
  const [item, setItem] = useState(props.item);
  const [timeLeft, setTimeLeft] = useState(
    Math.round((item.endDate - Date.now()) / 1000)
  );

  useInterval(() => {
    setTimeLeft(timeLeft - 60);
  }, 1000);

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

  function isUserLastBidder(lastBidderId) {
    if (!user) {
      return false;
    }
    return lastBidderId === user.uid;
  }

  return (
    <SlideWrapper>
      <ImageContainer>
        <Image src={item.imageUrl} alt={item.title} />
      </ImageContainer>
      <Title>Hand Painted Asian Lacquer jewelry Box</Title>
      <DetailsContainer>
        <Details>
          <CurrentBid userBid={isUserLastBidder(item.lastBidderId)}>{`$${
            item.bidsCount ? item.currentBid : item.startingBid
          }`}</CurrentBid>
          <TimeLeft>{showApproximateTimeLeft(timeLeft)}</TimeLeft>
        </Details>
        <ItemLink to={`/item?id=${item.id}`}>Explore</ItemLink>
      </DetailsContainer>
    </SlideWrapper>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Slide);
