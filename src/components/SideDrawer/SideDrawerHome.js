import React from "react";

import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { Base64 } from "js-base64";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer-home";
  if (props.show) {
    drawerClasses = "side-drawer-home open";
  }

  const logout = (e) => {
    localStorage.removeItem(Base64.encode("user"));
  };

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/home">Forum</Link>
        </li>
        <li>
          <Link to="/home/news">News</Link>
        </li>
        <li>
          <Link to="/home/settings">Settings</Link>
        </li>
        <li>
          <Link to="/login" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
