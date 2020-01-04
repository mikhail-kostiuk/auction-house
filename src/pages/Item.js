import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { firestore } from "../firebase";
import Header from "../components/header/Header";
import {
  Page,
  BackLink,
  ArrowIcon,
  PageContent,
  PageContentContainer,
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
  Bids
} from "./ItemStyles";

function Item(props) {
  const parsedQuery = queryString.parse(props.location.search);
  const { id } = parsedQuery;

  const [item, setItem] = useState(null);

  useEffect(() => {
    const docRef = firestore.collection("items").doc(id);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          setItem(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Page>
      <Header />
      <PageContentContainer>
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
                <TimeLeft>{item.endDate.seconds}</TimeLeft>
              </LotInfo>
              <Form>
                <BidsInfo>
                  <CurrentBid>{item.currentBid}</CurrentBid>
                  <Bids>{item.bids}</Bids>
                </BidsInfo>
                <div>
                  <span>Quick bid</span>
                  <div>
                    <button>{`$${item.currentBid * 1.1}`}</button>
                    <button>{`$${item.currentBid * 1.5}`}</button>
                    <button>{`$${item.currentBid * 2}`}</button>
                  </div>
                  <div>
                    <label htmlFor="directBid">Bid directly</label>
                    <input type="number" name="directBid" id="directBid" />
                    <button>Place bid</button>
                  </div>
                  <button>Add to favorites</button>
                </div>
              </Form>
            </Right>
          </PageContent>
        )}
      </PageContentContainer>
    </Page>
  );
}

export default Item;
