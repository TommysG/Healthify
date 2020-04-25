import { Row, Col, Container } from "react-bootstrap";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer-box">
      <Container className="foot-container">
        <Row>
          <Col md={4}>
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col md={2} className="auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          </Col>
          <Col md={2} className="auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          </Col>
          <Col md={2} className="auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
          </Col>
        </Row>
      </Container>

      <hr className="footer-line" />
      <Container>
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb" href="#index">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw " href="#index">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus" href="#index">
              <i className="fab fa-google-plus-g"> </i>
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
