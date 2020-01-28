import React from "react";
import { MenuButtonWrapper, MenuIcon } from "./MenuButtonStyles";

function MenuButton(props) {
  return (
    <MenuButtonWrapper onClick={props.openMenu}>
      <MenuIcon />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
