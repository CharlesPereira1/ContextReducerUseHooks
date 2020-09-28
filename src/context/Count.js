import React, { createContext, useReducer, useContext } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};

//criacao useContext
const initialState = { count: 100 };

const CountContext = createContext(initialState);

export default function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

// useHook criado
export function useCount() {
  const context = useContext(CountContext);

  if (!context) throw new Error("useCount mus be used within a CountProvider");

  const { state, dispatch } = context;

  return { state, dispatch };
}
