/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import { ContextValue, HttpContext } from "../../src/context/httpContext";

const renderWithProvider = (ui: React.ReactElement, options: ContextValue) => {
  console.log("options", options);
  return render(
    <HttpContext.Provider value={options}>{ui}</HttpContext.Provider>
  );
};

export { renderWithProvider as render };
