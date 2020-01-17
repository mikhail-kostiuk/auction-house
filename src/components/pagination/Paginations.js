import React from "react";
import {
  PaginationWrapper,
  Button,
  ArrowIcon,
  CurrentPage,
} from "./PaginationStyles";

function Paginations(props) {
  const { currentPage, totalPages, getNextItems, getPrevItems } = props;

  return (
    <PaginationWrapper>
      <Button disabled={currentPage === 1} onClick={getPrevItems}>
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
      <CurrentPage>{`Page ${currentPage} of ${totalPages}`}</CurrentPage>
      <Button disabled={currentPage === totalPages} onClick={getNextItems}>
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
    </PaginationWrapper>
  );
}

export default Paginations;
