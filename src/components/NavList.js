import React from "react";

const NavList = () => {
  return (
    <div className="breadcrumbContainer">
      <ul className="breadcrumb">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home">Category</a>
        </li>
        <li>Thread</li>
      </ul>
    </div>
  );
};

export default NavList;
