import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import Router from "./routing/router";

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={true} />

      <RouterProvider router={Router} />
      {/* implementation for BrowserRouter (replaced w/ RouterProvider)
        <Router></Router> 
      */}
    </>
  );
}

export default App;
