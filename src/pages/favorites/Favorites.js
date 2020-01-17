import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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

      favorites.forEach(itemRef => {
        firestoreReadPromises.push(itemRef.get());
      });

      Promise.all(firestoreReadPromises).then(documentsSnapshots => {
        const result = [];

        documentsSnapshots.forEach(doc => {
          const data = doc.data();

          if (data) {
            result.push({ id: doc.id, ...data });
          }
        });

        setItems(result);
      });
    } else {
      setItems(null);
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

export default connect(mapStateToProps)(Favorites);
