import React from "react";

import GlobalContext from "./context/GlobalContext";

import Container from "./components/Container";

function App() {
  return (
    <GlobalContext>
      <Container />
    </GlobalContext>
  );
}

export default App;
