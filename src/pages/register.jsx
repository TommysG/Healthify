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
      <Container fluid className="register-container">
        <header className="top-head"></header>
        <div className="form">
          <h1 className="signup-title">Sign Up</h1>
          <p className="login-link">
            Already have a Healthify account? <Link to="/login">Log in</Link>
          </p>
          <Row className="signup-section">
            <Col xs={5} className="signup-email">
              <Input type="text" label="Email"></Input>
              <Input type="text" label="Type your email again"></Input>
              <Input type="password" label="Password"></Input>
              <Input type="password" label="Type your password again"></Input>
              <button className="signup-btn">Sign Up</button>
            </Col>
            <div xs={2} className="signup-social">
              <div className="btn-container">
                <button className="social-btn btn-facebook">
                  <img
                    src="https://static.parastorage.com/services/login-statics/1.742.0/images/facebook-logo.svg"
                    alt="img"
                  ></img>
                  <span>Continue with Facebook</span>
                </button>
              </div>
              <div className="btn-container">
                <button className="social-btn btn-google">
                  <img
                    alt="img"
                    src="https://static.parastorage.com/services/login-statics/1.742.0/images/google-logo.svg"
                  ></img>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
