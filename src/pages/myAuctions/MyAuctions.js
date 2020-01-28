import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildSortFunction } from "../../helpers/buildSortFunction";
import { PageContent } from "./MyAuctionsStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function MyAuctions(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;

    if (user) {
      const result = [];

      firestore
        .collection("items")
        .where("ownerId", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            result.push({ id: doc.id, ...doc.data() });
          });

          result.sort((a, b) => a.endDate - b.endDate);

          setItems(result);
        });
    } else {
      setItems(null);
    }
  }, [props.auth]);

  function handleSortOrderChange(sortOrder) {
    const sortedItems = [...items].sort(buildSortFunction(sortOrder));
    setItems(sortedItems);
  }

  return (
    <PageTemplate pageTitle="My Auctions">
      <PageContent>
        <Gallery
          items={items}
          maxColumns="4"
          handleSortOrderChange={handleSortOrderChange}
        />
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MyAuctions);
