import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [parentState, setParentState] = useState("Initial Parent State");

  const handleParentClick = () => {
    setParentState("Updated Parent State");
  };

  return (
    <ChildComponent
      parentState={parentState}
      onChildClick={handleParentClick}
    />
  );
};

export default ParentComponent;
