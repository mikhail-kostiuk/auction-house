import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import Slider from "../../components/slider/Slider";
import { PageContent, SidebarContainer } from "./HomeStyles";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
import PageTemplate from "../pageTemplate/PageTemplate";

function Home(props) {
  const [items, setItems] = useState(null);
  const category = props.category;

  useEffect(() => {
    const resultSet = [];
    let query;

    if (category.category) {
      query = firestore
        .collection("items")
        .where("category", "==", category.category);
    } else if (category.subcategory) {
      query = firestore
        .collection("items")
        .where("subcategory", "==", category.subcategory);
    } else {
      query = firestore.collection("items");
    }

    query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        resultSet.push({ id: doc.id, ...doc.data() });
      });
      setItems(resultSet);
    });
  }, [category]);

  function getSelectedCategoryName(category) {
    return category.subcategory || category.category || "All categories";
  }

  return (
    <PageTemplate>
      <Slider />
      <PageContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Gallery
          items={items}
          title={getSelectedCategoryName(category)}
          maxColumns="3"
        />
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps)(Home);
