import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildSortFunction } from "../../helpers/buildSortFunction";
import { PageContent } from "./FavoritesStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import Gallery from "../../components/gallery/Gallery";

function Favorites(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const { user } = props.auth;

    if (user) {
      firestore
        .collection("items")
        .where("favorites", "array-contains", user.uid)
        .get()
        .then(querySnapshot => {
          const result = [];
          querySnapshot.docs.forEach(itemDoc => {
            result.push({ id: itemDoc.id, ...itemDoc.data() });
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
    <PageTemplate pageTitle="Favorites">
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
    items: state.items,
  };
};

export default connect(mapStateToProps)(Favorites);
