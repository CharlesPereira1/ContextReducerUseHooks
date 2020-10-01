import React, { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./reducer";

const CountContext = createContext(initialState);

export default function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

// Criaçao de um Hook
export function useCount() {
  const context = useContext(CountContext);

  if (!context) throw new Error("Count deve ser usado dentro e um provider");

  const { state, dispatch } = context;

  return { state, dispatch };
}
