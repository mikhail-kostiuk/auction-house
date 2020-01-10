import React from "react";
import { PageContent } from "./SellStyles";
import SellForm from "../../components/sellForm/SellForm";
import PageTemplate from "../pageTemplate/PageTemplate";

function Sell() {
  return (
    <PageTemplate pageTitle="Sell on AuctionHouse">
      <PageContent>
        <SellForm />
      </PageContent>
    </PageTemplate>
  );
}

export default Sell;
