/* eslint-disable default-case */
//criacao do contexto com estado inicial
export const initialState = { count: 10 };

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};
