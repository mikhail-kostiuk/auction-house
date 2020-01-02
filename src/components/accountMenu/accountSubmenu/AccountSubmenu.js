import React, { useRef, useEffect } from "react";
import {
  AccountSubmenuList,
  Arrow,
  SubmenuListItem,
  SubmenuLink,
  LogoutButton,
} from "./AccountSubmenuStyles";

function AccountSubmenu(props) {
  const node = useRef();
  const { myAccountButton, submenuOpen, closeSubmenu } = props;

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

  return (
    <AccountSubmenuList ref={node}>
      <Arrow />
      <SubmenuListItem>
        <SubmenuLink href="#">My Auctions</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <SubmenuLink href="#">Won Items</SubmenuLink>
      </SubmenuListItem>
      <SubmenuListItem>
        <LogoutButton>Log Out</LogoutButton>
      </SubmenuListItem>
    </AccountSubmenuList>
  );
}

export default AccountSubmenu;
