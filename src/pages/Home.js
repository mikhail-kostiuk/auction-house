import React from "react";
import Header from "../components/header/Header";
import {
  PageContent,
  PageContentContainer,
  SidebarContainer,
} from "./HomeStyles";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <PageContentContainer>
        <PageContent>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        </PageContent>
      </PageContentContainer>
    </div>
  );
}

export default Home;
