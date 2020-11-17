import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Henry" animal="Dog" breed="Frenchie" />
      <Pet name="Boby" animal="Cat" breed="Exotic" />
      <Pet name="Buba" animal="Bird" breed="Parakeet" />
    </div>
  );
};

// ReactDOM.
render(<App />, document.getElementById("root"));
