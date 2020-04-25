import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer-home";
  if (props.show) {
    drawerClasses = "side-drawer-home open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/home">Forum</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/home/settings">Settings</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
