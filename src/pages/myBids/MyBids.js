import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";
import { PageContent } from "./MyBidsStyles";

function MyBids(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
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
          setItems(result);
        });
    } else {
      setItems(null);
    }
  }, [props]);

  return (
    <PageTemplate pageTitle="My Bids">
      <PageContent>
        <Gallery items={items} maxColumns="4" />
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MyBids);
