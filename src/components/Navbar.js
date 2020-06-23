import "../css/navbar.css";

import { NavLink, Link } from "react-router-dom";

import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="topnav">
        <a className="logo" href="/">
          Healthify
        </a>
        <div className="nav-buttons">
          <NavLink exact to="/login">
            Login
          </NavLink>
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Contact
          </Link>
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            About
          </Link>
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
