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

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

// useHook criado
export function usetheme() {
  const { theme, setTheme } = useContext(themeContext);

  return { theme, setTheme };
}
