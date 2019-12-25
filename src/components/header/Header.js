import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  SearchContainer,
  HeaderLogo,
  AuthButtons,
  NavigationContainer,
  NavigationWrapper,
} from "./HeaderStyles";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import MenuButton from "../mobileMenu/menuButton/MenuButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import Button from "./button/Button";
import Navigation from "./navigation/Navigation";
import SignUp from "../signUp/SignUp";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [signUpModalOpen, setSignUpModalOpen] = useState(true);

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
      <NavigationWrapper>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </NavigationWrapper>
      {mobileMenuOpen && (
        <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
      )}
      {signUpModalOpen && (
        <SignUp closeSignUp={() => setSignUpModalOpen(false)} />
      )}
    </HeaderWrapper>
  );
}

export default Header;
