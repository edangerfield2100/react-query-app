import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppContextProvider } from "./AppContextProvider";

type ProvidersProps = { children: React.ReactNode };

export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppContextProvider>
  );
}
