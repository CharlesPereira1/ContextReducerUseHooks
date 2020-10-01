import React, { createContext, useContext, useState, useCallback } from "react";

const ThemeContext = createContext();

//Criacao de uma const para usar de padrao theme
const themes = [
  {
    name: "white",
    colors: {
      background: "white",
      text: "black",
    },
  },
  {
    name: "dark",
    colors: {
      background: "black",
      text: "white",
    },
  },
];

//Contexto com RN - Regra de Negocio
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);
  const [click, setClick] = useState(false);

  //Funçao criada da Regra para alterar cor do container
  const gradient = useCallback(() => {
    setClick(!click);
    if (!click) {
      setTheme(themes[1]);
    } else {
      setTheme(themes[0]);
    }

    console.log(theme, click);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <ThemeContext.Provider value={{ theme, gradient }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Criando um Hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Tema deve ser usado dentro e um provider");

  const { theme, gradient } = context;

  return { theme, gradient };
}
