import React from "react";
import {
  PaginationWrapper,
  Button,
  PrevIcon,
  NextIcon,
  CurrentPage,
} from "./PaginationStyles";

function Paginations(props) {
  const { currentPage, totalPages, getNextItems, getPrevItems } = props;

  return (
    <PaginationWrapper>
      <Button disabled={currentPage === 1} onClick={getPrevItems}>
        <PrevIcon />
        Previous
      </Button>
      <CurrentPage>{`Page ${currentPage} of ${totalPages}`}</CurrentPage>
      <Button disabled={currentPage === totalPages} onClick={getNextItems}>
        Next <NextIcon />
      </Button>
    </PaginationWrapper>
  );
}

export default Paginations;
