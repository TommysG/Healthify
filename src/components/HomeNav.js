import React from "react";
import "../css/homenav.css";
import Search from "../components/Search";

const HomeNav = () => {
  return (
    <div>
      <img
        className="nav-image"
        src="https://www.doctorshospital.gr/img/homepage/slider/4.jpg"
        alt="logo"
      ></img>
      <div className="home-nav">
        <div className="nav-container">
          <div className="row">
            <div className="first-container">
              <h2>Healthify</h2>
            </div>
            <div className="second-container">
              <Search></Search>
            </div>
            <div className="third-container">
              <div className="search-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
