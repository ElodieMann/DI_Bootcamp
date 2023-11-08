import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/register">Register </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
