import React from "react";
import "../css/register.css";
import "../css/input.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import Navbar from "../components/Navbar";

export default function register() {
  return (
    <div className="signup-page">
      <Navbar />
      <Container fluid className="register-container">
        <header className="top-head"></header>
        <div className="form">
          <h1 className="signup-title">Sign Up</h1>
          <p className="login-link">
            Already have a Healthify account? <Link to="/login">Log in</Link>
          </p>
          <Row className="signup-section">
            <Col xs className="signup-email">
              <Input type="text" label="Email" />
              <Input type="text" label="Type your email again" />
              <Input type="password" label="Password" />
              <Input type="password" label="Type your password again" />
              <label className="checkbox">
                Doctor
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <button className="signup-btn">Sign Up</button>
            </Col>
            <div className="signup-social">
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
