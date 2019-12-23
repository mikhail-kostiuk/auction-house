import React from "react";
import SidebarNavigation from "./sidebarNavigation/SidebarNavigation";
import { SidebarWrapper } from "./SidebarStyles";

function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarNavigation></SidebarNavigation>
    </SidebarWrapper>
  );
}

export default Sidebar;
