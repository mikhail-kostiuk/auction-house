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
import Button from "./button/Button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MenuButton />
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
    </HeaderWrapper>
  );
}

export default Header;
