import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openSignInModal } from "../../actions/modalAction";
import { firestore } from "../../firebase";
import { PageContent } from "./FavoritesStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function Favorites(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;
    const { favorites } = props.items;

    if (user) {
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
    } else {
      setItems(null);
      props.openSignInModal();
    }
  }, [props]);

  return (
    <PageTemplate pageTitle="Favorites">
      <PageContent>
        <Gallery items={items} maxColumns="4" />
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    items: state.items,
  };
};

export default connect(mapStateToProps, { openSignInModal })(Favorites);
