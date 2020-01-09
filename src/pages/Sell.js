import React from "react";
import {
  SellWrapper,
  PageContent,
  PageContentContainer,
  PageTitle,
} from "./SellStyles";
import Header from "../components/header/Header";
import SellForm from "../components/sellForm/SellForm";

function Sell() {
  return (
    <SellWrapper>
      <Header />
      <PageContentContainer>
        <PageTitle>Sell on AuctionHouse</PageTitle>
        <PageContent>
          <SellForm />
        </PageContent>
      </PageContentContainer>
    </SellWrapper>
  );
}

export default Sell;
