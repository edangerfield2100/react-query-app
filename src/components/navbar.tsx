import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="my-4 sm:flex sm:justify-center">
        <li className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="w-32 m-2 btn border-2 border-purple-800 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
