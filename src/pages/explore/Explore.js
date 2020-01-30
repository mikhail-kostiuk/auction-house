import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildSortQuery } from "../../helpers/buildQuery";
import PageTemplate from "../pageTemplate/PageTemplate";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
import Pagination from "../../components/pagination/Paginations";
import {
  PageContent,
  SidebarContainer,
  GalleryContainer,
  PaginationContainer,
} from "./ExploreStyles";

function Explore(props) {
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("TIME_SOONEST");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultSet, setResultSet] = useState({
    items: [],
    cursor: {
      next: null,
      prev: null,
    },
  });

  const selectedCategories = props.category;
  const itemsPerPage = 12;

  useEffect(() => {
    setLoading(true);

    const query = buildSortQuery(sortOrder, selectedCategories);
    const result = [];

    firestore
      .collection("counters")
      .doc("items")
      .get()
      .then(countersDoc => {
        const selectedCategory = selectedCategories.subcategory
          ? selectedCategories.subcategory
          : selectedCategories.category;

        const counters = countersDoc.data();

        const totalItems = selectedCategory
          ? counters[selectedCategory]
          : counters.total;

        const totalPages = Math.ceil(totalItems / itemsPerPage);

        setTotalPages(totalPages ? totalPages : 1);
      });

    // Get initial first items
    query
      .limit(itemsPerPage)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          result.push({ id: doc.id, ...doc.data() });
        });

        let next;

        if (result.length < 6) {
          next = null;
        } else {
          const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

          next = query.startAfter(lastVisible).limit(itemsPerPage);
        }

        setCurrentPage(1);
        setResultSet({ items: result, cursor: { next } });
        setLoading(false);
      });
  }, [selectedCategories, sortOrder]);

  function getItems(cursorQuery) {
    setLoading(true);

    const result = [];
    let query = buildSortQuery(sortOrder, selectedCategories);

    cursorQuery.get().then(function(documentSnapshots) {
      documentSnapshots.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        result.push({ id: doc.id, ...doc.data() });
      });

      let lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      let firstVisible = documentSnapshots.docs[0];

      const next = query.startAfter(lastVisible).limit(itemsPerPage);
      const prev = query.endBefore(firstVisible).limitToLast(itemsPerPage);

      setResultSet({ items: result, cursor: { next, prev } });
      setLoading(false);
    });
  }

  function getPrevItems() {
    getItems(resultSet.cursor.prev);
    setCurrentPage(currentPage - 1);
  }

  function getNextItems() {
    getItems(resultSet.cursor.next);
    setCurrentPage(currentPage + 1);
  }

  function getSelectedCategoryName(selectedCategories) {
    return (
      selectedCategories.subcategory ||
      selectedCategories.category ||
      "All categories"
    );
  }

  function handleSortOrderChange(value) {
    setSortOrder(value);
    setCurrentPage(1);
  }

  return (
    <PageTemplate pageTitle="Explore our categories">
      <PageContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <GalleryContainer>
          <Gallery
            loading={loading}
            items={resultSet.items}
            title={getSelectedCategoryName(selectedCategories)}
            maxColumns="3"
            handleSortOrderChange={handleSortOrderChange}
          />
          <PaginationContainer>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              getNextItems={getNextItems}
              getPrevItems={getPrevItems}
            />
          </PaginationContainer>
        </GalleryContainer>
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps)(Explore);
