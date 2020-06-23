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
          <Col md={6} className="auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Contact us
            </h5>
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
