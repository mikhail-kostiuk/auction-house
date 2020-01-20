import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import MenuButton from "../mobileMenu/menuButton/MenuButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import Button from "./button/Button";
import Navigation from "./navigation/Navigation";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import WithdrawFunds from "../withdrawFunds/WithdrawFunds";
import AccountMenu from "../accountMenu/AccountMenu";
import SiteMenu from "./siteMenu/SiteMenu";
import { openSignUpModal, openSignInModal } from "../../actions/modalActions";
import {
  HeaderWrapper,
  ContentContainer,
  SearchContainer,
  LogoContainer,
  AccountActions,
  AuthButtons,
  NavigationContainer,
  NavigationWrapper,
} from "./HeaderStyles";

function Header(props) {
  const {
    signUpModalOpen,
    signInModalOpen,
    withdrawFundsModalOpen,
  } = props.modal;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const node = useRef();

  const accountActions = props.auth.user ? (
    <AccountMenu />
  ) : (
    <AuthButtons>
      <Button onClick={props.openSignInModal} text={"Sign In"} />
      <Button onClick={props.openSignUpModal} text={"Sign Up"} />
    </AuthButtons>
  );

  return (
    <HeaderWrapper>
      <SiteMenu />
      <ContentContainer>
        <MenuButton
          openMenu={() => {
            disableBodyScroll(node);
            setMobileMenuOpen(true);
          }}
        />
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <AccountActions>{accountActions}</AccountActions>
      </ContentContainer>
      <NavigationWrapper>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </NavigationWrapper>
      {mobileMenuOpen && (
        <MobileMenu
          node={node}
          closeMenu={() => {
            enableBodyScroll(node);
            clearAllBodyScrollLocks();
            setMobileMenuOpen(false);
          }}
        />
      )}
      {signUpModalOpen && <SignUp />}
      {signInModalOpen && <SignIn />}
      {withdrawFundsModalOpen && <WithdrawFunds />}
    </HeaderWrapper>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { openSignUpModal, openSignInModal })(
  Header
);
