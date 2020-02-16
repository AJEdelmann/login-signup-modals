import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="myLink" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/sign-up">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
