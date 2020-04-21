import "../css/navbar.css";

import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="topnav">
          <label className="logo">Healthify</label>
          <div className="nav-buttons">
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
          </div>
          <i className="fas fa-bars fa-2x menu" />
        </nav>
      </div>
    );
  }
}
