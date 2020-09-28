import React from "react";

import { useCount } from "../../context/Count";

function SeparateComponent() {
  const { state } = useCount();
  return (
    <div>
      <h1>Contagem compartilhada: {state.count}</h1>

      {/* <button onClick={() => {}}>Buscar novamente</button> */}
    </div>
  );
}

export default SeparateComponent;
