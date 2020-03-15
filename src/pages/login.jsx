import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../css/login.css";

export class login extends Component {
  render() {
    return (
      <Container className="box-container">
        <div className="login-container">
          <form className="login-form">
            <span className="login-title">Member Login</span>
            <input
              className="input-email"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="input-pass"
              type="password"
              name="pass"
              placeholder="Password"
            />
            <a
              type="button"
              href="/home"
              style={{
                marginTop: "5px",
                backgroundColor: "#4d4d4d",
                color: "white"
              }}
            >
              Sumbit
            </a>
            <div className="forgot-pass">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#forgot">
                Username / Password?
              </a>
            </div>

            <div className="create-account">
              <a className="txt2" href="#newAcount">
                Create your Account
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default login;
