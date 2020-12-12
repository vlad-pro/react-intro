import React from "react";
import { Link } from "@reach/router";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const NavBar = () => (
  <header
    css={css`
      background-color: black;
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
