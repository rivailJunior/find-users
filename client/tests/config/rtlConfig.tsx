/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import { ContextValue, UserContext } from "../../src/context/userContext";

const renderWithProvider = (ui: React.ReactElement, options: ContextValue) => {
  return render(
    <UserContext.Provider value={options}>{ui}</UserContext.Provider>
  );
};

export { renderWithProvider as render };
