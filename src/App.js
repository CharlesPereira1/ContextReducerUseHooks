import React from "react";

import CountProvider from "./context/Count";

import Counter from "./components/Counter";
import SeparateComponent from "./components/SeparateComponent";

function App() {
  return (
    <CountProvider>
      <Counter />

      <hr />

      <SeparateComponent />
    </CountProvider>
  );
}

export default App;
