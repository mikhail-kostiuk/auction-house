import React from "react";
import Card from "../card/Card";
import {
  GalleryWrapper,
  GalleryTitle,
  GalleryList,
  GalleryItem,
} from "./GalleryStyles";

function Gallery(props) {
  const { items, title, maxColumns } = props;

  return (
    items && (
      <GalleryWrapper>
        {title && <GalleryTitle>{title}</GalleryTitle>}
        <form>
          <select name="sort" id="sort">
            <option value="PRICE_HIGHEST">Price: Highest</option>
            <option value="PRICE_LOWEST">Price: Lowest</option>
            <option value="TIME_FURTHEST">Time: Ending Furthest</option>
            <option value="TIME_SOONEST">Time: Ending Soonest</option>
          </select>
        </form>
        <GalleryList>
          {items.map(item => (
            <GalleryItem maxColumns={maxColumns} key={item.id}>
              <Card item={item} />
            </GalleryItem>
          ))}
        </GalleryList>
      </GalleryWrapper>
    )
  );
}

export default Gallery;
