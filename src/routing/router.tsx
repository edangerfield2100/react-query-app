import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HelpLayout from "../components/layouts/helpLayout";
import RootLayout from "../components/layouts/rootLayout";

import About from "../pages/About";
import Faq from "../pages/help/Faq";
import Contact from "../pages/help/Contact";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import NoMatch from "../pages/NoMatch";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

// Implementation when using BrowserRouter
//
// function Router() {
//   return (
//     <Routes>
//       <Route path="/" element={<RootLayout />}>
//         <Route index element={<Home />} />
//         <Route path="movie-details/:movieId" element={<MovieDetails />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="search" element={<Search />} />
//         <Route path="profile" element={<Profile />} />
//         <Route path="*" element={<NoMatch />} />
//       </Route>
//     </Routes>
//   );
// }

// Implementation when using RouterProvider
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie-details/:movieId" element={<MovieDetails />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

export default Router;
