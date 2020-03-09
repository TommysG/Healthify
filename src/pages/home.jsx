import React, { Component } from "react";
import TablePost from "../components/TablePost";
import Category from "../components/Category";

export class home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-container">
          <div className="post-container">
            <TablePost></TablePost>
          </div>
          <div className="right-container">
            <div className="categories-container">
              <Category></Category>
            </div>
            <div className="categories-container">
              <Category></Category>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
