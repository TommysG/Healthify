import React from "react";
import "../css/search.css";

const Search = () => {
  return (
    <div className="search-box">
      <form>
        <input className="search" type="text" placeholder="Search Topics" />
        <button type="button" className="search-button">
          <i className="fa fa-search search-icon"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
