import React from "react";

import { useCount } from "../../context/Count";

function Mirror() {
  const { count } = useCount();

  return (
    <div>
      <span>
        <b>Mirror: </b> {count}
      </span>

      <br />
    </div>
  );
}

export default Mirror;
