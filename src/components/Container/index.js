import React from "react";

import { useTheme } from "../../context/Theme/context";

import Counter from "../Counter";
import SeparateComponent from "../SeparateComponent";

function Container() {
  const { theme, gradient } = useTheme();
  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <button
        type="button"
        onClick={() => {
          gradient();
        }}
      >
        mudar cor
      </button>

      <hr />

      <Counter />
      <hr />

      <SeparateComponent />
    </div>
  );
}

export default Container;
