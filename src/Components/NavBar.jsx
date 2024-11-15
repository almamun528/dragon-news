import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const NavBar = () => {
  return (
    <>
      <main>
        <header className="flex items-center justify-between w-11/12 mt-3">
          <nav className="left"></nav>

          <nav className="middle flex gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
          </nav>

          <nav className="right flex gap-2 items-center">
            <FaUser className="text-4xl"></FaUser>
            <Link
              to="/auth/login"
              className="btn bg-black text-white hover:bg-gray-900 rounded-none py-1 px-5"
            >
              Log In
            </Link>
          </nav>
        </header>
      </main>
    </>
  );
};

export default NavBar;
