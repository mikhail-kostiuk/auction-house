import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import Card from "../card/Card";
import { GalleryWrapper, GalleryList, GalleryItem } from "./GalleryStyles";

// TODO: Refactor repeated code from the "Gallery" type components into a single reusable component
function Gallery(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const resultSet = [];
    const category = props.category;
    let query;

    if (category.category) {
      query = firestore
        .collection("items")
        .where("category", "==", category.category);
    } else if (category.subcategory) {
      query = firestore
        .collection("items")
        .where("subcategory", "==", category.subcategory);
    } else {
      query = firestore.collection("items");
    }

    query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        resultSet.push({ id: doc.id, ...doc.data() });
      });
      setItems(resultSet);
    });
  }, [props.category]);

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
      {items && (
        <GalleryList>
          {items.map(item => (
            <GalleryItem key={item.id}>
              <Card item={item} />
            </GalleryItem>
          ))}
        </GalleryList>
      )}
    </GalleryWrapper>
  );
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps)(Gallery);
