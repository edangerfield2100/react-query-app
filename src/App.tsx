import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { useAppContext } from "./hooks";
import Router from "./routing/router";

function App() {
  const { user } = useAppContext();

  return (
    <div>
      <ReactQueryDevtools initialIsOpen={true} />
      <h1 className="mt-4 text-4xl text-center">
        Welcome {user.firstName} to the Movie Database
      </h1>
      <RouterProvider router={Router} />
      {/* implementation for BrowserRouter (replaced w/ RouterProvider)
        <Router></Router> 
      */}
    </div>
  );
}

export default App;
