import React from "react";
import {
  SiteMenuWrapper,
  MenuContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./SiteMenuStyles";

function SiteMenu() {
  return (
    <SiteMenuWrapper>
      <MenuContainer>
        <Menu>
          <MenuItem>
            <MenuLink to="/explore">Explore Auctions</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contacts">Contacts</MenuLink>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </SiteMenuWrapper>
  );
}

export default SiteMenu;
