import React from "react";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./LogoStyles";

function Logo() {
  return (
    <LogoWrapper>
      <Link to="/">
        <span>auction</span>
        <span>house</span>
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
