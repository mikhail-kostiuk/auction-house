import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addFunds, withdrawFunds } from "../../actions/fundsActions";
import { firestore } from "../../firebase";
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
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
            </svg>
          </Icon>
          <MenuTitle>Favorites</MenuTitle>
        </MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink to="/my-bids">
          <Icon>
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 21"
              fill="currentColor"
            >
              <path d="M7,21 C5.19782359,21 3.78047872,19.7073294 3.78047872,17.8920719 C3.78047872,17.101646 3.97807886,16.4815468 4.42886375,15.5038095 C5.04751046,14.1619854 5.05294882,14.0600792 4.44032669,13.6269617 C4.38049124,13.5846414 4.28177331,13.5150918 4.11252834,13.3957734 C3.97611648,13.2994232 3.86562437,13.2207238 3.756698,13.1420648 C3.47471584,12.938437 3.22827547,12.7527858 2.99121614,12.5630562 C1.07962479,11.0331208 0,9.37697961 0,7.1966949 C0,3.22619884 3.13048102,0 7,0 C10.869519,0 14,3.22619884 14,7.1966949 C14,9.37697961 12.9203752,11.0331208 11.0087839,12.5630562 C10.7717245,12.7527858 10.5252842,12.938437 10.243302,13.1420648 C10.1343756,13.2207238 10.0238835,13.2994232 9.88747166,13.3957734 C9.71822669,13.5150918 9.61950877,13.5846414 9.5595221,13.6270686 C8.94705118,14.0600792 8.95248954,14.1619854 9.57113625,15.5038095 C10.0219211,16.4815468 10.2195213,17.101646 10.2195213,17.8920719 C10.2195213,19.7075057 8.80268737,21 7,21 Z M7,19.0430251 C7.77774821,19.0430251 8.28696127,18.5785 8.28696127,17.8920719 C8.28696127,17.4691346 8.1583258,17.065457 7.82002189,16.3316871 C6.84414193,14.2150361 6.78988946,13.1984305 8.4530682,12.0225804 C9.39452852,11.3567071 9.44441217,11.3206846 9.81045501,11.0277235 C11.3044435,9.83201503 12.06744,8.66158079 12.06744,7.1966949 C12.06744,4.29938745 9.79452426,1.95697488 7,1.95697488 C4.20547574,1.95697488 1.93256002,4.29938745 1.93256002,7.1966949 C1.93256002,8.66158079 2.69555647,9.83201503 4.18954499,11.0277235 C4.55558783,11.3206846 4.60547148,11.3567071 5.54678059,12.0224735 C7.21011054,13.1984305 7.15585807,14.2150361 6.17997811,16.3316871 C5.8416742,17.065457 5.71303873,17.4691346 5.71303873,17.8920719 C5.71303873,18.5782153 6.2226781,19.0430251 7,19.0430251 Z"></path>
            </svg>
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
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
            </svg>
          </Icon>
          <ArrowIcon>
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
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
