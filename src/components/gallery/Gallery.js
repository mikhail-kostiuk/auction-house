import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import Card from "../card/Card";
import { GalleryWrapper, GalleryList, GalleryItem } from "./GalleryStyles";

function Gallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const resultSet = [];
    firestore
      .collection("items")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          resultSet.push({ id: doc.id, ...doc.data() });
        });
        setItems(resultSet);
      });
  }, []);

  return (
    <GalleryWrapper>
      <h1>Category name</h1>
      <form>
        <select name="sort" id="sort">
          <option value="lowestBid">Lowest Bid</option>
          <option value="highestBid">Highest Bid</option>
          <option value="closingDate">Closing Date</option>
          <option value="startingDate">Starting Date</option>
        </select>
      </form>
      <GalleryList>
        {items.map(item => (
          <GalleryItem key={item.id}>
            <Card
              id={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              currentBid={item.currentBid}
              timeLeft={item.endDate}
            />
          </GalleryItem>
        ))}
      </GalleryList>
    </GalleryWrapper>
  );
}

export default Gallery;
