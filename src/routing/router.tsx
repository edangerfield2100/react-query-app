import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NoMatch from "../pages/NoMatch";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="movie-details" element={<MovieDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
