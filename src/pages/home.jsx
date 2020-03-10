import React, { Component } from "react";
import TablePost from "../components/TablePost";
import Search from "../components/Search";

import "../css/home.css";
import HomeMenu from "../components/HomeMenu";

export class home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-container">
          <div className="homenav-container">
            <div className="home-nav">
              <div className="first-container">Something goes here</div>
              <div className="search-container">
                <Search></Search>
              </div>
              <div className="third-container">Something goes here</div>
            </div>
            <div className="post-container">
              <HomeMenu></HomeMenu>
              <TablePost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
