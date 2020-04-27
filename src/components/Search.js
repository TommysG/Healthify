import React from "react";
import "../css/search.css";
//import DropdownButton from "react-bootstrap/DropdownButton";
//import DropdownItem from "react-bootstrap/DropdownItem";

const Search = () => {
  return (
    <div className="search-box">
      {/*<DropdownButton className="filter-button" title={"Posts"}>
				<DropdownItem eventKey="1">Articles</DropdownItem>
	</DropdownButton>*/}
      <button type="button" className="search-button">
        <i className="fa fa-search search-icon"></i>
      </button>
      <input className="search" placeholder="Searching"></input>
    </div>
  );
};

export default Search;
