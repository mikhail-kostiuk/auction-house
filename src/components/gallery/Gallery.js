import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import {
  GalleryWrapper,
  GalleryTitle,
  GalleryList,
  GalleryItem,
} from "./GalleryStyles";

function Gallery(props) {
  const { items, title, maxColumns, handleSortOrderChange } = props;

  return (
    items && (
      <GalleryWrapper>
        {title && <GalleryTitle>{title}</GalleryTitle>}
        <form>
          <select
            name="sort"
            id="sort"
            defaultValue="TIME_SOONEST"
            onChange={e => handleSortOrderChange(e.target.value)}
          >
            <option value="TIME_SOONEST">Time: Ending Soonest</option>
            <option value="TIME_FURTHEST">Time: Ending Furthest</option>
            <option value="PRICE_LOWEST">Price: Lowest</option>
            <option value="PRICE_HIGHEST">Price: Highest</option>
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Gallery);
