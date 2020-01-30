import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildSortFunction } from "../../helpers/buildSortFunction";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function WonItems(props) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);

  useEffect(() => {
    setLoading(true);

    const { user } = props.auth;

    if (user) {
      firestore
        .collection("items")
        .where("lastBidderId", "==", user.uid)
        .where("closed", "==", true)
        .get()
        .then(querySnapshot => {
          const result = [];

          querySnapshot.docs.forEach(itemDoc => {
            result.push({ id: itemDoc.id, ...itemDoc.data() });
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
    <PageTemplate pageTitle="Won Items">
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

export default connect(mapStateToProps)(WonItems);
