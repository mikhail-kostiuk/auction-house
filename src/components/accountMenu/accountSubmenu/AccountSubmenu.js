import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  AccountSubmenuList,
  Arrow,
  SubmenuListItem,
  UserEmail,
  SubmenuLink,
  LogoutButton,
} from "./AccountSubmenuStyles";
import { auth } from "../../../firebase";

function AccountSubmenu(props) {
  const node = useRef();
  const { user } = props.auth;
  const { myAccountButton, submenuOpen, closeSubmenu } = props;
  console.log(props);

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }

      if (myAccountButton.current.contains(e.target)) {
        // myAccountButton click
        return;
      }

      // outside click
      closeSubmenu();
    };

    if (submenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myAccountButton, submenuOpen, closeSubmenu]);

  function logout() {
    auth.signOut().catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  return (
    <AccountSubmenuList ref={node}>
      <Arrow />
      <SubmenuListItem>
        <UserEmail>{user.email}</UserEmail>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/my-auctions">My Auctions</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/">Won Items</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/sell">Sell Item</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </SubmenuListItem>
    </AccountSubmenuList>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(AccountSubmenu);
