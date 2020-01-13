import React from "react";
import Slider from "../../components/slider/Slider";
import { PageContent, SidebarContainer } from "./HomeStyles";
import Sidebar from "../../components/sidebar/Sidebar";
import SearchGallery from "../../components/galleries/searchGallery/SearchGallery";
import PageTemplate from "../pageTemplate/PageTemplate";

function Home() {
  return (
    <PageTemplate>
      <Slider />
      <PageContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <SearchGallery />
      </PageContent>
    </PageTemplate>
  );
}

export default Home;
