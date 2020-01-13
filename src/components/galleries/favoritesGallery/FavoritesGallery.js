import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../../firebase";
import Gallery from "../gallery/Gallery";

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

  return <Gallery items={items} maxColumns="4" />;
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Favorites);
