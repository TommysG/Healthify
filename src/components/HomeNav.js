import React from "react";
import "../css/homenav.css";
import Search from "../components/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Link } from "react-router-dom";

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
            <Col lg={8} md={8} xs={12} className="first-container">
              <Col xs={1} className="healthify-logo">
                <h2>Healthify</h2>
              </Col>
              <Search></Search>
            </Col>
            <Col lg={4} md={4} className="second-container">
              <ButtonToolbar className="btn-toolbar btn-container">
                <Button className="new-topic" variant="secondary">
                  <Link to="/createpost">Create Topic </Link>
                </Button>
                <i className="fas fa-bell notif-ico"></i>
                <img
                  className="profile-img"
                  src="http://forum.azyrusthemes.com/images/avatar.jpg"
                  alt="avatar"
                  height="37px"
                ></img>
                <DropdownButton className="profile-button" title={""}>
                  <DropdownItem eventKey="1">Settings</DropdownItem>
                  <DropdownItem eventKey="2">Logout</DropdownItem>
                </DropdownButton>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeNav;
