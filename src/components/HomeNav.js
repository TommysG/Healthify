import React, { useEffect, useState } from "react";
import "../css/homenav.css";
import Search from "../components/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Link, NavLink } from "react-router-dom";
import { Base64 } from "js-base64";

const logout = (e) => {
  localStorage.removeItem(Base64.encode("user"));
};

const HomeNav = (props) => {
  let user = JSON.parse(localStorage.getItem(Base64.encode("user")));
  const [userAvatar, setUserAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (user) {
      const url = "http://localhost:3100/api/user/" + Base64.decode(user.e);

      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setUserAvatar(response.avatar);
          setUsername(response.username);
          setLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const loadAvatar = () => {
    if (loaded) {
      return (
        <div style={{ display: "flex" }}>
          <span className="nav-username">{username}</span>
          <img
            className="profile-img"
            src={userAvatar}
            alt="avatar"
            height="37px"
          ></img>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <img className="nav-image" src="/images/navimage.jpg" alt="logo"></img>
      <div className="home-nav">
        <Container className="home-container">
          <i
            className="fas fa-bars fa-2x home-menu"
            onClick={props.drawerClickHandler}
          />
          <Row>
            <Col lg={8} md={8} xs={12} className="first-container">
              <Col xs={1} className="healthify-logo">
                <a href="/home">
                  <h2>Healthify</h2>
                </a>
              </Col>
              <nav className="topnav-home">
                <NavLink exact to="/home/news">
                  News
                </NavLink>
                <NavLink exact to="/home">
                  Forum
                </NavLink>
              </nav>
              <Search
                handleSearch={props.handleSearch}
                sumbitSearch={props.sumbitSearch}
              ></Search>
            </Col>
            <Col lg={4} md={4} className="second-container">
              <ButtonToolbar className="btn-toolbar btn-container profile-container">
                {loadAvatar()}

                <DropdownButton className="profile-button" title={""}>
                  <DropdownItem eventKey="1" as={Link} to="/home/settings">
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    eventKey="2"
                    as={Link}
                    to="/login"
                    onClick={(e) => logout(e)}
                  >
                    Logout
                  </DropdownItem>
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
