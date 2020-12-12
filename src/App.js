import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    // Strict mode is just for future proof the app - give warnings when some depricated fucntion is used
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt me</h1>
            </Link>
          </header>
          {/* top level suspense is used in all the child components */}
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// ReactDOM.
render(<App />, document.getElementById("root"));
