import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../css/login.css";

export class login extends Component {
  render() {
    return (
      <Container className="box-container">
        <div className="login-container">
          <form className="login-form" method="post">
            <img
              className="background2"
              src="images/user_icon.png"
              alt="logo"
            ></img>
            <h1>Login</h1>
            <input
              className="input-email"
              type="text"
              name="email-user"
              placeholder="Email or Username"
            />
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
      </Container>
    );
  }
}

export default login;
