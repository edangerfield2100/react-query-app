import React, { createContext } from "react";

export type AppContextType = {
  user: {
    firstName: string;
    lastName: string;
  };
};

export const AppContext = createContext<AppContextType>({
  user: {
    firstName: "",
    lastName: "",
  },
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext.Provider
      value={{ user: { firstName: "Joe", lastName: "Smith" } }}
    >
      {children}
    </AppContext.Provider>
  );
}
