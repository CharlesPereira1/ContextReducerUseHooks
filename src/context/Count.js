import React, { createContext, useState, useContext } from "react";

//criacao useContext
const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// useHook criado
export function useCount() {
  const { count, setCount } = useContext(CountContext);

  // const { count, setCount } = context;

  return { count, setCount };
}
