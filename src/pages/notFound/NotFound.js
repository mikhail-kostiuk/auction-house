import React from "react";
import PageTemplate from "../pageTemplate/PageTemplate";
import { PageContent, ErrorCode, ErrorText } from "./NotFoundStyles";

function NotFound() {
  return (
    <PageTemplate>
      <PageContent>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Sorry! We can't find what you're looking for.</ErrorText>
      </PageContent>
    </PageTemplate>
  );
}

export default NotFound;
