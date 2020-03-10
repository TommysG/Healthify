import React from "react";
import "../css/search.css";

const Search = () => {
  return (
    <div className="inputWithIcon">
      <input className="search" type="text" placeholder="Search in forum" />
      <i className="material-icons" aria-hidden="true">
        search
      </i>
    </div>
  );
};

export default Search;
