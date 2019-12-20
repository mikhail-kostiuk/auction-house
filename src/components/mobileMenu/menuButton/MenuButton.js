import React from "react";
import { MenuButtonWrapper } from "./MenuButtonStyles";

function MenuButton(props) {
  return (
    <MenuButtonWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <rect width="100" height="20" />
        <rect y="40" width="100" height="20" />
        <rect y="80" width="100" height="20" />
      </svg>
    </MenuButtonWrapper>
  );
}

export default MenuButton;
