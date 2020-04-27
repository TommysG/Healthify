import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/news.css";
import "../css/card.css";
import HomeNav from "../components/HomeNav";
import { CardImage } from "../components/CardImage";
import { CardNews } from "../components/CardNews";
import Footer from "../components/Footer";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";

import { Link } from "react-router-dom";

import newsfile from "../news.json";

export class news extends Component {
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
    const allNews = newsfile.map((item) => (
      <CardNews
        key={item.id}
        className="featured-post"
        img={item.image}
        category={item.category}
        title={<Link to={`/news/viewnews/${item.id}`}>{item.title}</Link>}
      ></CardNews>
    ));

    const featured = (
      <CardImage
        className="featured-post"
        img={newsfile[0].image}
        category={newsfile[0].category}
        title={
          <Link to={`/news/viewnews/${newsfile[0].id}`}>
            {newsfile[0].title}
          </Link>
        }
      ></CardImage>
    );

    const featuredRight = (
      <CardImage
        className="single-top-post"
        img={newsfile[1].image}
        category={newsfile[1].category}
        title={
          <Link to={`/news/viewnews/${newsfile[1].id}`}>
            {newsfile[1].title}
          </Link>
        }
      ></CardImage>
    );

    const featuredDown = (
      <CardImage
        className="single-top-post sp-10"
        img={newsfile[2].image}
        category={newsfile[2].category}
        title={
          <Link to={`/news/viewnews/${newsfile[2].id}`}>
            {newsfile[2].title}
          </Link>
        }
      ></CardImage>
    );

    return (
      <div>
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container fluid className="news">
          <section className="top-post-area">
            <div className="container no-padding">
              <section className="section-heading top-posts">
                <h6>Most Recent</h6>
              </section>
              <div className="row small-gutters">
                <Col lg={8} className="top-post-left">
                  {featured}
                </Col>
                <Col lg={4} className="top-post-right">
                  {featuredRight}
                  {featuredDown}
                </Col>
              </div>
            </div>
          </section>
          <section className="latest-post-area pb-120">
            <div className="container no-padding">
              <Row>
                <Col lg={8} className="post-list">
                  <section className="section-heading">
                    <h6>All news</h6>
                  </section>
                  {allNews}
                </Col>
                <Col lg={4} className="">
                  {/*<section className="section-heading">
                  <h6>Editor's pick</h6>
    </section>*/}
                </Col>
              </Row>
            </div>
          </section>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default news;
