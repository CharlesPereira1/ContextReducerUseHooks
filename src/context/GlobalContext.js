import React from "react";

import CountProvider from "./Count";
import ThemeProvider from "./Theme";

export default function GlobalContext({ children }) {
  <CountProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </CountProvider>;
}
