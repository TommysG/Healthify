import React from "react";
import "../css/navlist.css";

import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="breadcrumbContainer">
      <ul className="breadcrumb">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Category</Link>
        </li>
        <li>Thread</li>
      </ul>
    </div>
  );
};

export default NavList;
