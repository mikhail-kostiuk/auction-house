import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase";
import { buildBasicQuery } from "../../helpers/buildQuery";
import PageTemplate from "../pageTemplate/PageTemplate";
import Slider from "../../components/slider/Slider";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
import Pagination from "../../components/pagination/Paginations";
import {
  PageContent,
  SidebarContainer,
  GalleryContainer,
  PaginationContainer,
} from "./HomeStyles";

function Home(props) {
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
  const itemsPerPage = 6;

  useEffect(() => {
    const query = buildBasicQuery(sortOrder, selectedCategories);
    const result = [];

    // If category or subcategory is selected, use items array length returned
    // by query to calculate total pages
    if (selectedCategories.category || selectedCategories.subcategory) {
      query.get().then(querySnapshot => {
        const totalItems = querySnapshot.docs.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(totalPages ? totalPages : 1);
      });
    } else {
      // If category or subcategory is not selected, use internal collection
      // counter to calculate total pages
      firestore
        .collection("lots")
        .doc("active")
        .get()
        .then(doc => {
          const totalItems = doc.data().numberOfDocs;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          setTotalPages(totalPages ? totalPages : 1);
        });
    }

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
      });
  }, [selectedCategories, sortOrder]);

  function getItems(cursorQuery) {
    const result = [];
    let basicQuery = buildBasicQuery(sortOrder, selectedCategories);

    cursorQuery.get().then(function(documentSnapshots) {
      documentSnapshots.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        result.push({ id: doc.id, ...doc.data() });
      });

      let lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      let firstVisible = documentSnapshots.docs[0];

      const next = basicQuery.startAfter(lastVisible).limit(itemsPerPage);
      const prev = basicQuery.endBefore(firstVisible).limitToLast(itemsPerPage);

      setResultSet({ items: result, cursor: { next, prev } });
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
    <PageTemplate>
      <Slider />
      <PageContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <GalleryContainer>
          <Gallery
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

export default connect(mapStateToProps)(Home);
