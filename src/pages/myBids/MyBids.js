import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildSortFunction } from "../../helpers/buildSortFunction";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function MyBids(props) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);

  useEffect(() => {
    setLoading(true);

    const { user } = props.auth;

    if (user) {
      const result = [];

      firestore
        .collection("items")
        .where("closed", "==", false)
        .where("lastBidderId", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            result.push({ id: doc.id, ...doc.data() });
          });

          result.sort((a, b) => a.endDate - b.endDate);

          setItems(result);
          setLoading(false);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    } else {
      setItems(null);
      setLoading(false);
    }
  }, [props.auth]);

  function handleSortOrderChange(sortOrder) {
    const sortedItems = [...items].sort(buildSortFunction(sortOrder));
    setItems(sortedItems);
  }

  return (
    <PageTemplate pageTitle="My Bids">
      <Gallery
        loading={loading}
        items={items}
        maxColumns="4"
        handleSortOrderChange={handleSortOrderChange}
      />
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MyBids);
