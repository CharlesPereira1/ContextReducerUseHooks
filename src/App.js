import React from "react";

import GlobalContext from "./context/GlobalContext";

import Counter from "./components/Counter";
import SeparateComponent from "./components/SeparateComponent";

function App() {
  return (
    <GlobalContext>
      <Counter />

      <hr />

      <SeparateComponent />
    </GlobalContext>
  );
}

export default App;
