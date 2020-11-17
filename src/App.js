const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Henry",
      animal: "Dog",
      breed: "Frenchie",
    }),
    React.createElement(Pet, { name: "Boby", animal: "Cat", breed: "Exotic" }),
    React.createElement(Pet, {
      name: "Buba",
      animal: "Bird",
      breed: "Parakeet",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
