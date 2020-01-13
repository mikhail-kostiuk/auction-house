import React from "react";
import { PageContent } from "./MyBidsStyles";
import PageTemplate from "../pageTemplate/PageTemplate";
import MyBidsGallery from "../../components/galleries/myBidsGallery/MyBidsGallery";

function MyBids() {
  return (
    <PageTemplate pageTitle="My Bids">
      <PageContent>
        <MyBidsGallery />
      </PageContent>
    </PageTemplate>
  );
}

export default MyBids;
