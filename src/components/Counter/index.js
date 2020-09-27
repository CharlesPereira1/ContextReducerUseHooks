import React from "react";

import { useCount } from "../../context/Count";

function Counter() {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <b>Count: </b> {count}
      </span>

      <br />

      <button onClick={() => setCount(count + 1)}>Incremente</button>
    </div>
  );
}

export default Counter;
