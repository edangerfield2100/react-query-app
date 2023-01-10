import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NoMatch from "../pages/NoMatch";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="movie-details" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
