import React from "react";
import { useAppContext } from "./hooks";
import Router from "./routing/router";

function App() {
  const { user } = useAppContext();

  return (
    <div>
      <h1 className="mt-4 text-4xl text-center">
        Welcome {user.firstName} to the Movie Database
      </h1>
      <Router></Router>
    </div>
  );
}

export default App;
