import React from "react";

import CountProvider from "./Count/context";
import ThemeProvider from "./Theme/context";

const GlobalContext = ({ children }) => (
  <CountProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </CountProvider>
);

export default GlobalContext;
