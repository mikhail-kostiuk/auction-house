import React from "react";
import { PageContent } from "./FavoritesStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import FavoritesGallery from "../../components/favorites/FavoritesGallery";

function Favorites() {
  return (
    <PageTemplate pageTitle="Favorites">
      <PageContent>
        <FavoritesGallery />
      </PageContent>
    </PageTemplate>
  );
}

export default Favorites;
