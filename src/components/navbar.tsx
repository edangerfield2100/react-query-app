import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className="my-4 sm:flex sm:justify-center">
          <li className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="w-32 m-2 btn border-2 border-purple-800 text-center hover:bg-purple-800 hover:text-white transition ease-out duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <button
        className="hidden md:block mt-4 md:absolute md:right-4 md:top-0 w-9"
        onClick={() => {
          navigate("/profile", { state: { userId: "someUserId" } });
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </button>
      <hr />
      <Outlet />
    </div>
  );
}

export default Navbar;
