import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { PageContent } from "./MyBidsStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/galleries/gallery/Gallery";

function MyBids(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;
    const resultSet = [];

    if (user) {
      firestore
        .collection("items")
        .where("lastBidder", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            resultSet.push({ id: doc.id, ...doc.data() });
          });
          setItems(resultSet);
        });
    } else {
      props.history.push("/not-found");
    }
  }, [props.auth, props.history]);

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
