import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../../firebase";
import Gallery from "../gallery/Gallery";

function MyBidsGallery(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;
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
  }, [props.auth]);

  return <Gallery items={items} maxColumns="4" />;
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MyBidsGallery);
