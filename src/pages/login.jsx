import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../css/login.css";

export class login extends Component {
  render() {
    return (
      <Container className="split">
        <div className="left">
          <form className="login-form" method="post">
            <div className="title">
              <h1>Healthify</h1>
              <h1>Login</h1>
            </div>

            <div className="login-box">
              <i className="fa fa-user icon"></i>
              <input
                className="input-email"
                type="text"
                name="email-user"
                placeholder="Email or Username"
              />
            </div>

            <input
              className="input-pass"
              type="password"
              name="pass"
              placeholder="Password"
            />

            <a type="submit" href="/home">
              Sumbit
            </a>

            <div className="forgot-pass">
              <a type="forgot" name="" href="/home">
                Forgot Username / Password?
              </a>
            </div>

            <div className="create-account">
              <a type="txt2" href="/home">
                Create your Account
              </a>
            </div>
          </form>
        </div>

        <div className="split right">
          <img className="background" src="images/doctors.png" alt="logo"></img>
          <form className="signup-form" method="post"></form>
        </div>
      </Container>
    );
  }
}

export default login;
