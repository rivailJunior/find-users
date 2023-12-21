import { HttpContext, contextValue } from "./httpContext";

export function HttpProvider({ children }: { children: React.ReactNode }) {
  return (
    <HttpContext.Provider value={contextValue}>{children}</HttpContext.Provider>
  );
}
