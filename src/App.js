import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    // Strict mode is just for future proof the app - give warnings when some depricated fucntion is used
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt me</h1>
            </Link>
          </header>
          {/* top level suspense is used in all the child components */}
          <Router>
            <SearchParams path="/" />
            <Details path="details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

// ReactDOM.
render(<App />, document.getElementById("root"));
