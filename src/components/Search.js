import React from "react";
import "../css/search.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";

const Search = () => {
	return (
		<div className="filter-search">
			<DropdownButton className="filter-button" title={"Posts"}>
				<DropdownItem eventKey="1">Articles</DropdownItem>
			</DropdownButton>
			<input className="search-field" placeholder="Searching"></input>
			<button type="button" className="search-button">
				<i className="fa fa-search search-icon"></i>
			</button>
		</div>
	);
};

export default Search;
