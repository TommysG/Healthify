import React from "react";
import "../css/register.css";
import "../css/input.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function register() {
  return (
    <div className="signup-page">
      <Container className="register-container">
        <header className="top-head">
          <i className="fas fa-times fa-2x"></i>
        </header>
        <div className="form">
          <h1 className="signup-title">Sign Up</h1>
          <p className="login-link">
            Already have a Healthify account? <Link to="/login">Log in</Link>
          </p>
          <Row className="signup-section">
            <Col xs={6} className="signup-email">
              <Input type="text" label="Email"></Input>
              <Input type="text" label="Type your email again"></Input>
              <Input type="password" label="Password"></Input>
              <Input type="password" label="Type your password again"></Input>
              <button>Sign Up</button>
            </Col>
            <div className="divider"></div>
            <Col xs={2} className="signup-social">
              <button>Facebook</button>
              <button>Google</button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
