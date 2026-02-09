import React from "react";

const Child = React.memo(({ faltu }) => {
  console.log("Child rendered");
  return <button onClick={faltu}>Child Button</button>;
});

export default Child;
