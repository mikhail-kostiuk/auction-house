import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  SearchContainer,
  HeaderLogo,
  AuthButtons,
} from "./HeaderStyles";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import MenuButton from "../mobileMenu/menuButton/MenuButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import Button from "./button/Button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MenuButton openMenu={() => setMobileMenuOpen(true)} />
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <AuthButtons>
          <Button text={"Log In"} />
          <Button text={"Sign Up"} />
        </AuthButtons>
      </HeaderContainer>
      {mobileMenuOpen && (
        <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
      )}
    </HeaderWrapper>
  );
}

export default Header;
