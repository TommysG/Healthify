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

    const newsContent = newsfile.map((item) => {
      if (item.id.toString() === this.props.match.params.id)
        return (
          <NewsView
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            content={item.content}
          ></NewsView>
        );
      return <div key={item.id}></div>;
    });

    return (
      <div className="news">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="news-container">
          <Col>{newsContent}</Col>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default viewNews;
