import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import Card from "../card/Card";
import {
  FavoritesWrapper,
  FavoritesList,
  FavoritesItem,
} from "./FavoritesGalleryStyles";

// TODO: Refactor repeated code from the "Gallery" type components into a single reusable component
function Favorites(props) {
  const { favorites } = props.items;
  const [items, setItems] = useState(null);

  useEffect(() => {
    const firestoreReadPromises = [];

    favorites.forEach(itemId => {
      firestoreReadPromises.push(
        firestore
          .collection("items")
          .doc(itemId)
          .get()
      );
    });

    Promise.all(firestoreReadPromises).then(documentsSnapshots => {
      const resultSet = [];

      documentsSnapshots.forEach(doc =>
        resultSet.push({ id: doc.id, ...doc.data() })
      );
      setItems(resultSet);
    });
  }, [favorites]);

  return (
    <FavoritesWrapper>
      <h1>Category name</h1>
      <form>
        <select name="sort" id="sort">
          <option value="lowestBid">Lowest Bid</option>
          <option value="highestBid">Highest Bid</option>
          <option value="closingDate">Closing Date</option>
          <option value="startingDate">Starting Date</option>
        </select>
      </form>
      {items && (
        <FavoritesList>
          {items.map(item => (
            <FavoritesItem key={item.id}>
              <Card item={item} />
            </FavoritesItem>
          ))}
        </FavoritesList>
      )}
    </FavoritesWrapper>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Favorites);
