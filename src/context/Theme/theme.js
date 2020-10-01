import React, { createContext, useContext, useState } from "react";

const themes = [
  {
    name: "dark",
    colors: {
      background: "black",
      text: "white",
    },
  },
  {
    name: "white",
    colors: {
      background: "white",
      text: "black",
    },
  },
];

const themeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[1]);
  const [click, setClick] = useState(false);

  export function gradient() {
    setClick(!click);
    if (click) {
      setTheme(themes[0]);
    }
  }

  return (
    <themeContext.Provider value={{ theme, gradient }}>
      {children}
    </themeContext.Provider>
  );
}

// useHook criado
export function usetheme() {
  const { theme, gradient } = useContext(themeContext);

  return { theme, gradient };
}
