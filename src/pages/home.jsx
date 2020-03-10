import React, { Component } from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
export class home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <HomeNav></HomeNav>
        </div>
        <div className="container">
          <div className="row">
            <div className="post-container">
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
            <div className="column-container">
              <SideBlock></SideBlock>
              <SideBlock></SideBlock>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
