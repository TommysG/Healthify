import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="topnav">
        <label className="logo">Healthify</label>
        <a href="/login">Login</a>
        <a href="/contact"> Contact</a>
        <a href="/about"> About</a>
        <a className="active" href="/">
          Home
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
