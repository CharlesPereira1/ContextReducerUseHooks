import React from "react";

import CountProvider from "./context/Count";

import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

function App() {
  return (
    <CountProvider>
      <Counter />

      <hr />

      <Mirror />
    </CountProvider>
  );
}

export default App;
