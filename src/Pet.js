import React from "react";

export default function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
}
