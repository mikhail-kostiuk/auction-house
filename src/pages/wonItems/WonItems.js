import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function WonItems(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
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

          setItems(result);
        });
    } else {
      setItems(null);
    }
  }, [props]);

  return (
    <PageTemplate pageTitle="Won Items">
      <Gallery items={items} maxColumns="4" />
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(WonItems);
