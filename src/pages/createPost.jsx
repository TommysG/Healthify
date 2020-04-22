import React, { Component } from "react";

import CreatePostComponent from "../components/createComponent";
import HomeNav from "../components/HomeNav";
import SideBlock from "../components/SideBlock";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Container } from "react-bootstrap";

export class createPost extends Component {
  render() {
    return (
      <div className="mainView">
        <HomeNav />
        <Container className="createPost-container">
          <Row>
            <Col lg={8} md={8}>
              <CreatePostComponent />
            </Col>
            <Col lg={4} md={4}>
              <SideBlock></SideBlock>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default createPost;
