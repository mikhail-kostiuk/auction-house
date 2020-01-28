import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addFunds, withdrawFunds } from "../../actions/fundsActions";
import { firestore } from "../../firebase";
import { ReactComponent as FavoritesIcon } from "../../assets/svg/favorites.svg";
import { ReactComponent as MyBidsIcon } from "../../assets/svg/my-bids.svg";
import { ReactComponent as TriangleArrowIcon } from "../../assets/svg/triangle-arrow.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg";
import AccountSubmenu from "./accountSubmenu/AccountSubmenu";
import {
  MenuList,
  MenuListItem,
  MenuLink,
  Icon,
  ArrowIcon,
  Button,
  MenuTitle,
} from "./AccountMenuStyles";

function AccountMenu(props) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const myAccountButton = useRef();

  const { user } = props.auth;
  const { funds } = props.funds;
  const { addFunds, withdrawFunds } = props;

  useEffect(() => {
    const userRef = firestore.collection("users").doc(user.uid);
    const unsubscribe = userRef.onSnapshot(function(doc) {
      const userData = doc.data();
      if (funds !== userData.funds) {
        if (funds < userData.funds) {
          addFunds(userData.funds - funds);
        } else {
          withdrawFunds(funds - userData.funds);
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user.uid, funds, addFunds, withdrawFunds]);

  return (
    <MenuList>
      <MenuListItem>
        <MenuLink to="/favorites">
          <Icon>
            <FavoritesIcon />
          </Icon>
          <MenuTitle>Favorites</MenuTitle>
        </MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="/my-bids">
          <Icon>
            <MyBidsIcon />
          </Icon>
          <MenuTitle>My Bids</MenuTitle>
        </MenuLink>
      </MenuListItem>
      <MenuListItem>
        <Button
          ref={myAccountButton}
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <Icon>
            <UserIcon />
          </Icon>
          <ArrowIcon>
            <TriangleArrowIcon />
          </ArrowIcon>
          <MenuTitle>My Account</MenuTitle>
        </Button>
        {submenuOpen && (
          <AccountSubmenu
            funds={funds}
            myAccountButton={myAccountButton}
            submenuOpen={submenuOpen}
            closeSubmenu={() => setSubmenuOpen(false)}
          />
        )}
      </MenuListItem>
    </MenuList>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    funds: state.funds,
  };
};

export default connect(mapStateToProps, { addFunds, withdrawFunds })(
  AccountMenu
);
