import React from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import { Link } from "react-router-dom";

import data from "../data.json";
import Button from "react-bootstrap/Button";

function home() {
  const posts = data.map((item) => (
    <Post
      key={item.id}
      id={item.id}
      title={<Link to={`/home/viewpost/${item.id}`}>{item.title}</Link>}
      body={item.body}
      replies={item.replies}
      time={item.time}
    ></Post>
  ));

  return (
    <Container className="home" fluid={true}>
      <div>
        <HomeNav></HomeNav>
      </div>
      <Container className="post-container">
        <Row>
          <Col lg={8} md={8} xs={12}>
            <Row className="header-row">
              <ButtonToolbar className="btn-toolbar home-toolbar">
                <DropdownButton variant="secondary" title={"Sort By"}>
                  <DropdownItem eventKey="1">Recent</DropdownItem>
                  <DropdownItem eventKey="2">Most Viewed</DropdownItem>
                  <DropdownItem eventKey="3">Most Liked</DropdownItem>
                </DropdownButton>

                <Button variant="secondary" className="createBtn">
                  <a href="/createpost">New Topic</a>
                </Button>
              </ButtonToolbar>
            </Row>
            {posts}
          </Col>
          <Col lg={4} md={4}>
            <SideBlock></SideBlock>
            <SideBlock></SideBlock>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default home;
