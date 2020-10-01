import React from "react";

import { useCount } from "../../context/Count/context";

function Counter() {
  const { state, dispatch } = useCount();

  return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: "increment" })}> + </button>

      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </div>
  );
}

export default Counter;
