import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import { NewsView } from "../components/NewsView";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";

import newsfile from "../news.json";

export class viewNews extends Component {
  state = {
    sideDrawerOpen: false,
    newsPost: [],
    isLoaded: false,
    error: null,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    this.loadNewsPost();
  }

  loadNewsPost = () => {
    let url1 = "http://localhost:3100/api/post/" + this.props.match.params.id;

    fetch(url1, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ newsPost: response, isLoaded: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoaded: true, error: err });
      });
  };

  render() {
    const { newsPost, isLoaded, error } = this.state;
    let backdrop;
    let post;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }

    if (error) {
      post = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      post = <div>Loading...</div>;
    } else {
      post = (
        <NewsView
          key={newsPost.post_id}
          id={newsPost.post_id}
          title={newsPost.title}
          category={newsPost.category}
          image={newsPost.imgUrl}
          content={newsPost.body}
        ></NewsView>
      );
    }

    return (
      <div className="news">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="news-container">
          <Col>{post}</Col>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default viewNews;
