import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/news.css";
import "../css/card.css";
import HomeNav from "../components/HomeNav";
import { Card } from "../components/Card";
import { CardNews } from "../components/CardNews";

function news() {
  return (
    <div>
      <HomeNav />
      <Container fluid className="news">
        <section className="top-post-area pt-10">
          <div className="container no-padding">
            <div className="row small-gutters">
              <Col lg={8} className="top-post-left">
                <Card
                  className="featured-post"
                  img="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></Card>
              </Col>
              <Col lg={4} className="top-post-right">
                <Card
                  className="single-top-post"
                  img="https://images.unsplash.com/photo-1580458072512-96ced1f43991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></Card>
                <Card
                  className="single-top-post sp-10"
                  img="https://images.unsplash.com/photo-1580917922805-f8f57e08c0ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></Card>
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

                <CardNews
                  className="featured-post"
                  img="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></CardNews>

                <CardNews
                  className="featured-post"
                  img="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></CardNews>

                <CardNews
                  className="featured-post"
                  img="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
                  category="Health"
                  title="A Discount Toner Cartridge Is Better Than Ever."
                ></CardNews>
              </Col>
              <Col lg={4} className="">
                <section className="section-heading">
                  <h6>Editor's pick</h6>
                </section>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default news;
