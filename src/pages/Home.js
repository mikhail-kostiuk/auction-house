import React from "react";
import Header from "../components/header/Header";
import { PageContent, PageContentContainer } from "./HomeStyles";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <PageContent>
        <PageContentContainer>
          <Sidebar />
        </PageContentContainer>
      </PageContent>
    </div>
  );
}

export default Home;
