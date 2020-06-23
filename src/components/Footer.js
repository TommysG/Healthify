import { Row, Col, Container } from "react-bootstrap";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer-box">
      <Container className="foot-container">
        <Row>
          <Col md={4}>
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About</h5>
            <p>
              This is a website, made for educational purposes from CSD AUTH
              students. It's a health forum, where people and doctors can join
              and create a big community, with a view to improve levels of
              health and well-being.
            </p>
          </Col>
          <Col md={4} className="auto contact-footer">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Contact us
            </h5>
            <a href="mailto: healthifycsd@gmail.com">
              <i style={{ marginRight: "10px" }} className="fa fa-envelope"></i>
              healthifycsd@gmail.com
            </a>
          </Col>
          <Col md={2} className="auto contact-footer">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Sources
            </h5>
            <div style={{ display: "grid" }}>
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingBottom: "10px" }}
              >
                <i className="fa fa-globe" style={{ marginRight: "10px" }}></i>
                UNSPLASH
              </a>
              <a
                href="https://www.bbc.com/news/health"
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingBottom: "10px" }}
              >
                <i className="fa fa-globe" style={{ marginRight: "10px" }}></i>
                BBC NEWS
              </a>
              <a
                href="https://edition.cnn.com/health"
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingBottom: "10px" }}
              >
                <i className="fa fa-globe" style={{ marginRight: "10px" }}></i>
                CNN NEWS
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="footer-line" />
      <Container>
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb"
              href="https://www.facebook.com/Healthify-109747880789796"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-tw "
              href="https://twitter.com/HealthifyC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-gplus"
              href="https://www.instagram.com/healthify_csd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
      </Container>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> Healthify</a>
      </div>
    </footer>
  );
};

export default Footer;
