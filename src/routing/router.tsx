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
import NoMatch from "../pages/NoMatch";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import MovieDetailsV1 from "../pages/MovieDetailsV1";
import MovieDetailsV2, { MovieDetailsV2Loader } from "../pages/MovieDetailsV2";
import MovieDetailsV3, { MovieDetailsV3Loader } from "../pages/MovieDetailsV3";
import MovieDetailsV4, { MovieDetailsV4Loader } from "../pages/MovieDetailsV4";

import { queryClient } from "../providers";
import MovieDetailsV5, { MovieDetailsV5Loader } from "../pages/MovieDetailsV5";
import ErrorPage from "../pages/Error";

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
      {/* React Query in component */}
      <Route path="movie-details-v1/:movieId" element={<MovieDetailsV1 />} />
      {/* Fetch via loader */}
      <Route
        path="movie-details-v2/:movieId"
        element={<MovieDetailsV2 />}
        loader={MovieDetailsV2Loader}
      />
      {/* Fetch via loader w/ defer */}
      <Route
        path="movie-details-v3/:movieId"
        element={<MovieDetailsV3 />}
        loader={MovieDetailsV3Loader}
      />
      {/* React Query in loader */}
      <Route
        path="movie-details-v4/:movieId"
        element={<MovieDetailsV4 />}
        loader={MovieDetailsV4Loader(queryClient)}
        errorElement={<ErrorPage />}
      />
      {/* React Query in loader w/ defer */}
      <Route
        path="movie-details-v5/:movieId"
        element={<MovieDetailsV5 />}
        loader={MovieDetailsV5Loader(queryClient)}
      />
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
