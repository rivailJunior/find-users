import { UserContext, contextValue } from "./userContext";

export function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
