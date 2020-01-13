import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openSignInModal } from "../../actions/modalAction";
import { firestore } from "../../firebase";
import { PageContent } from "./MyBidsStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function MyBids(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;

    if (user) {
      const resultSet = [];

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
      setItems(null);
      props.openSignInModal();
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

export default connect(mapStateToProps, { openSignInModal })(MyBids);
