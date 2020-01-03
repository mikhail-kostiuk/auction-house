import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { firestore } from "../firebase";
import Header from "../components/header/Header";
import {
  Page,
  BackLink,
  PageContent,
  PageContentContainer,
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
        <BackLink to="/home">Back to Search</BackLink>
        {item && (
          <PageContent>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <form>
              <div>
                <span>{item.currentBid}</span>
                <span>{item.bids}</span>
              </div>
              <div>
                <span>{`Starting bid ${item.startingBid}`}</span>
                <span>{item.endDate.seconds}</span>
              </div>
              <div>
                <span>Quick bid</span>
                <div>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <div>
                  <label htmlFor="directBid">Bid directly</label>
                  <input type="number" name="directBid" id="directBid" />
                  <button>Place bid</button>
                </div>
                <button>Add to favorites</button>
              </div>
            </form>
          </PageContent>
        )}
      </PageContentContainer>
    </Page>
  );
}

export default Item;
