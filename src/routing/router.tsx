import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NoMatch from "../pages/NoMatch";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="movie-details/:movieId" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
