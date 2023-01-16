import React, { createContext, useState } from "react";

export type AppContextType = {
  user: {
    firstName: string;
    lastName: string;
  };
  setUser: (value: { firstName: string; lastName: string }) => void;
};

export const AppContext = createContext<AppContextType>({
  user: {
    firstName: "",
    lastName: "",
  },
  setUser: (user) => {},
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
