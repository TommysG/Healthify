import React from "react";
import "../css/navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="topnav">
        <label className="logo">Healthify</label>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/" className="active">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
