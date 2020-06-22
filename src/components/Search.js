import React, { useState } from "react";
import "../css/search.css";
import { Redirect } from "react-router-dom";

const Search = (props) => {
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/home"></Redirect>;
    }
  };
  return (
    <div className="search-box">
      {renderRedirect()}
      <button
        type="button"
        className="search-button"
        onClick={
          props.sumbitSearch
            ? props.sumbitSearch
            : () => {
                setRedirect(true);
              }
        }
      >
        <i
          className={
            props.handleSearch
              ? "fa fa-search search-icon"
              : "fa fa-home search-icon"
          }
        ></i>
      </button>
      <input
        className="search"
        placeholder={props.handleSearch ? "Search" : "Nothing to search here."}
        name="searchText"
        onChange={props.handleSearch}
      ></input>
    </div>
  );
};

export default Search;
