import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  SearchContainer,
} from "./HeaderStyles";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import MenuButton from "../mobileMenu/menuButton/MenuButton";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <Logo />
        <MenuButton />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
