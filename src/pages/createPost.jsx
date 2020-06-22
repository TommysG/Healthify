import React, { Component } from "react";

import CreatePostComponent from "../components/createComponent";
import HomeNav from "../components/HomeNav";
import SideBlock from "../components/SideBlock";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";
import { Poll } from "../components/Poll";
import { ToastContainer } from "react-toastify";

import { Container } from "react-bootstrap";

export class createPost extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }
    return (
      <div className="mainView">
        <ToastContainer></ToastContainer>
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="createPost-container">
          <Row>
            <Col lg={8} md={8}>
              <CreatePostComponent />
            </Col>
            <Col lg={4} md={4}>
              <SideBlock></SideBlock>
              <Poll></Poll>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default createPost;
