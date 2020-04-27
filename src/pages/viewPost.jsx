import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import PostView from "../components/PostView";
import SideBlock from "../components/SideBlock";
import { Poll } from "../components/Poll";
import Reply from "../components/Reply";
import Footer from "../components/Footer";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data.json";

export class viewPost extends Component {
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

    const post = data.map((item) => {
      if (item.id.toString() === this.props.match.params.id)
        return (
          <PostView
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.body}
            date={item.time}
            style={`style`}
          ></PostView>
        );
      return null;
    });

    const replies = data.map((item, id) => {
      if (item.id.toString() === this.props.match.params.id) {
        return (
          <div key={item.id}>
            {item.postReplies.map((reply) => (
              <PostView
                key={reply.id}
                id={reply.id}
                title={reply.title}
                content={reply.content}
                date={reply.date}
              ></PostView>
            ))}
          </div>
        );
      }
      return null;
    });

    return (
      <div className="view-container">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="post-container">
          <Row>
            <Col lg={8} md={8}>
              {post}
              {replies}
              <Reply />
            </Col>
            <Col lg={4} md={4}>
              <SideBlock></SideBlock>
              <Poll />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default viewPost;
