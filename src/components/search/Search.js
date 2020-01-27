import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import searchClient from "../../config/algolia";
import Autocomplete from "./autocomplete/Autocomplete";

function Search() {
  return (
    <InstantSearch indexName="items" searchClient={searchClient}>
      <Autocomplete />
    </InstantSearch>
  );
}

export default Search;
