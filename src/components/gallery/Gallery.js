import React from "react";
import Card from "../card/Card";
import { GalleryWrapper, GalleryList, GalleryItem } from "./GalleryStyles";

function Gallery() {
  return (
    <GalleryWrapper>
      <h1>Category name</h1>
      <form>
        <select name="sort" id="sort">
          <option value="lowestBid">Lowest Bid</option>
          <option value="highestBid">Highest Bid</option>
          <option value="closingDate">Closing Date</option>
          <option value="startingDate">Starting Date</option>
        </select>
      </form>
      <GalleryList>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
        <GalleryItem>
          <Card />
        </GalleryItem>
      </GalleryList>
    </GalleryWrapper>
  );
}

export default Gallery;
