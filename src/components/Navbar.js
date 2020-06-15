import "../css/navbar.css";

import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="topnav">
        <label className="logo">Healthify</label>
        <div className="nav-buttons">
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <i
          className="fas fa-bars fa-2x menu"
          onClick={props.drawerClickHandler}
        />
      </nav>
    </div>
  );
};

export default Navbar;
