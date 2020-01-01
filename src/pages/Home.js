import React from "react";
import Header from "../components/header/Header";
import {
  HomeWrapper,
  PageContent,
  PageContentContainer,
  SidebarContainer,
} from "./HomeStyles";
import Sidebar from "../components/sidebar/Sidebar";
import Gallery from "../components/gallery/Gallery";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      {/* <PageContentWrapper> */}
      <PageContentContainer>
        <PageContent>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <Gallery />
        </PageContent>
      </PageContentContainer>
      {/* </PageContentWrapper> */}
    </HomeWrapper>
  );
}

export default Home;
