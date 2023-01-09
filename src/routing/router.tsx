import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
