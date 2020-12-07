import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/css";

const NavBar = () => (
  <header
    css={css`
      background-color: #666;
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span role="img" aria-label="logo">
      🤗
    </span>
  </header>
);

export default NavBar;
