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
import SignIn from "../signIn/SignIn";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <HeaderWrapper>
      {console.log(signInModalOpen)}
      <HeaderContainer>
        <MenuButton openMenu={() => setMobileMenuOpen(true)} />
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <AuthButtons>
          <Button onClick={() => setSignInModalOpen(true)} text={"Sign In"} />
          <Button onClick={() => setSignUpModalOpen(true)} text={"Sign Up"} />
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
      {signInModalOpen && (
        <SignIn closeSignIn={() => setSignInModalOpen(false)} />
      )}
    </HeaderWrapper>
  );
}

export default Header;
