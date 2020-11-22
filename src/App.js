import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./details";

const App = () => {
  return (
    // Strict mode is just for future proof the app - give warnings when some depricated fucntion is used
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt me</h1>
          </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// ReactDOM.
render(<App />, document.getElementById("root"));
