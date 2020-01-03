import React, { useState } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  HeaderContainer,
  SearchContainer,
  HeaderLogo,
  AccountActions,
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
import AccountMenu from "../accountMenu/AccountMenu";

function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const accountActions = props.auth.user ? (
    <AccountMenu />
  ) : (
    <AuthButtons>
      <Button onClick={() => setSignInModalOpen(true)} text={"Sign In"} />
      <Button onClick={() => setSignUpModalOpen(true)} text={"Sign Up"} />
    </AuthButtons>
  );

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
        <AccountActions>{accountActions}</AccountActions>
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
        <SignUp
          closeSignUp={() => setSignUpModalOpen(false)}
          openSignIn={() => setSignInModalOpen(true)}
        />
      )}
      {signInModalOpen && (
        <SignIn
          closeSignIn={() => setSignInModalOpen(false)}
          openSignUp={() => setSignUpModalOpen(true)}
        />
      )}
    </HeaderWrapper>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
