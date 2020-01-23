import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  openAddFundsModal,
  openWithdrawFundsModal,
} from "../../../actions/modalActions";
import { auth } from "../../../firebase";
import {
  AccountSubmenuList,
  Arrow,
  SubmenuListItem,
  UserInfo,
  UserEmail,
  UserFunds,
  SubmenuLink,
  Button,
  LogoutButton,
} from "./AccountSubmenuStyles";

function AccountSubmenu(props) {
  const node = useRef();
  const { user } = props.auth;
  const { myAccountButton, submenuOpen, closeSubmenu, funds } = props;

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
        <UserInfo>
          <UserEmail>{user.email}</UserEmail>
          <UserFunds>{funds}$</UserFunds>
        </UserInfo>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/my-auctions">My Auctions</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/won-items">Won Items</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink to="/sell">Sell Item</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <Button
          onClick={e => {
            props.closeSubmenu();
            props.openAddFundsModal();
          }}
        >
          Add Funds
        </Button>
      </SubmenuListItem>
      <SubmenuListItem>
        <Button
          onClick={e => {
            props.closeSubmenu();
            props.openWithdrawFundsModal();
          }}
        >
          Withdraw Funds
        </Button>
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

export default connect(mapStateToProps, {
  openAddFundsModal,
  openWithdrawFundsModal,
})(AccountSubmenu);
