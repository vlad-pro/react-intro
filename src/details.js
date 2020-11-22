import React from "react";

const Details = (props) => {
  return (
    <pre>
      <h1>Hey hey</h1>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
