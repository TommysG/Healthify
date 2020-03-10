import React from "react";
import "../css/menu.css";

const homeMenu = () => {
  return (
    <div className="category-nav">
      <a
        href="#all"
        className="all-categories"
        onClick={() => console.log("drop-down")}
      >
        All Categories
      </a>
      <a href="#all" className="filter active">
        Latest
      </a>
      <a href="#all" className="filter">
        Unread
      </a>
      <a href="#all" className="filter">
        Rising
      </a>
      <a href="#all" className="filter">
        Most Liked
      </a>
    </div>
  );
};

export default homeMenu;
