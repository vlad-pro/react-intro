import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    // Strict mode is just for future proof the app - give warnings when some depricated fucntion is used
    <React.StrictMode>
      <div>
        <h1>Adopt me</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// ReactDOM.
render(<App />, document.getElementById("root"));
