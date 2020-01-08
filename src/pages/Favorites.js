import React from "react";
import Header from "../components/header/Header";
import {
  FavoritesWrapper,
  PageContent,
  PageContentContainer,
} from "./FavoritesStyles";
import FavoritesGallery from "../components/favorites/FavoritesGallery";

function Favorites() {
  return (
    <FavoritesWrapper>
      <Header />
      <PageContentContainer>
        <PageContent>
          <FavoritesGallery />
        </PageContent>
      </PageContentContainer>
    </FavoritesWrapper>
  );
}

export default Favorites;
