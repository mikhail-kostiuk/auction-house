import React from "react";
import Slider from "../../components/slider/Slider";
import { PageContent, SidebarContainer } from "./HomeStyles";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
import PageTemplate from "../pageTemplate/PageTemplate";

function Home() {
  return (
    <PageTemplate>
      <Slider />
      <PageContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Gallery />
      </PageContent>
    </PageTemplate>
  );
}

export default Home;
