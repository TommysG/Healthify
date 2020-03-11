import React from "react";
import "../css/homenav.css";
import Search from "../components/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const HomeNav = () => {
  return (
    <div>
      <img
        className="nav-image"
        src="https://www.doctorshospital.gr/img/homepage/slider/4.jpg"
        alt="logo"
      ></img>
      <div className="home-nav">
        <Container>
          <Row>
            <div className="first-container">
              <h2>Healthify</h2>
            </div>
            <div className="second-container">
              <Search></Search>
            </div>
            <div className="third-container">
              <div className="search-container"></div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeNav;
