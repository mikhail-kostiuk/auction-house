import React from "react";
import Card from "../card/Card";
import {
  GalleryWrapper,
  GalleryTitle,
  GalleryList,
  GalleryItem,
  Pagination,
  Button,
  ArrowIcon,
  CurrentPage,
} from "./GalleryStyles";

function Gallery(props) {
  const { items, title, maxColumns } = props;

  return (
    items && (
      <GalleryWrapper>
        {title && <GalleryTitle>{title}</GalleryTitle>}
        <form>
          <select
            name="sort"
            id="sort"
            defaultValue="TIME_FURTHEST"
            onChange={e => props.setSortOrder(e.target.value)}
          >
            <option value="TIME_FURTHEST">Time: Ending Furthest</option>
            <option value="TIME_SOONEST">Time: Ending Soonest</option>
            <option value="PRICE_HIGHEST">Price: Highest</option>
            <option value="PRICE_LOWEST">Price: Lowest</option>
          </select>
        </form>
        <GalleryList>
          {items.map(item => (
            <GalleryItem maxColumns={maxColumns} key={item.id}>
              <Card item={item} />
            </GalleryItem>
          ))}
        </GalleryList>
        <Pagination>
          <Button disabled={props.currentPage < 2} onClick={props.prev}>
            <ArrowIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M0,7" />
              <path d="M1.41,8.41,7,14l1.41-1.41L2.82,7,8.41,1.41,7,0,1.41,5.59,0,7" />
            </ArrowIcon>
            Previous
          </Button>
          <CurrentPage>{`Page ${props.currentPage} of ${props.totalPages}`}</CurrentPage>
          <Button
            disabled={props.currentPage === props.totalPages}
            onClick={props.next}
          >
            Next{" "}
            <ArrowIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M8.41,7" />
              <path d="M7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,8.41,7" />
            </ArrowIcon>
          </Button>
        </Pagination>
      </GalleryWrapper>
    )
  );
}

export default Gallery;
