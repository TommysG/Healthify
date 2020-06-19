import React from "react";
import "../css/register.css";
import "../css/input.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Backdrop from "../components/Backdrop/Backdrop";
import SideDrawer from "../components/SideDrawer/SideDrawer";

import { Base64 } from "js-base64";
import Navbar from "../components/Navbar";
import { Component } from "react";
import ReactFacebookLogin from "react-facebook-login";

export class register extends Component {
  state = {
    sideDrawerOpen: false,
    username: "",
    userEmail: "",
    userPassword: "",
    userConfPassword: "",
    avatar: "",
    isDoctor: false,
    redirect: false,
    auth: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.auth !== this.state.auth) {
      this.setState({ redirect: true });
    }
  }

  signUp = (event) => {
    fetch("http://localhost:3100/api/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        username: this.state.username,
        pwd: Base64.encode(this.state.userPassword),
        repeatPwd: Base64.encode(this.state.userPassword),
        role: this.state.isDoctor ? "doctor" : "user",
        avatar:
          "/images/avatars/" +
          this.state.username.charAt(0).toLowerCase() +
          ".png",
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          const user = {
            email: this.state.userEmail,
            username: this.state.username,
            role: this.state.isDoctor ? "doctor" : "user",
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.setState({ auth: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getInputText = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/home",
          }}
        />
      );
    }
  };

  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      console.log(response);
      const userData = {
        email: response.email,
        username: response.name,
        role: "user",
      };
      localStorage.setItem("user", JSON.stringify(userData));

      this.setState({
        username: response.name,
        userEmail: response.email,
        auth: true,
      });
    }
  };

  componentClicked = () => {
    console.log("clicked");
  };

  checkboxHandle = (e) => {
    this.setState({ isDoctor: !this.state.isDoctor });
  };

  render() {
    let backdrop;

    let fbContent = (
      <ReactFacebookLogin
        appId="730727707757186"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        onClick={this.componentClicked}
        cssClass="social-btn btn-facebook"
        icon="fa-facebook"
        textButton={<span>Continue with facebook</span>}
      />
    );

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="signup-page">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container fluid className="register-container">
          <header className="top-head"></header>
          <div className="form">
            <h1 className="signup-title">Sign Up</h1>
            <p className="login-link">
              Already have a Healthify account? <Link to="/login">Log in</Link>
            </p>
            <Row className="signup-section">
              <Col xs className="signup-email">
                <Input
                  type="text"
                  label="Name"
                  name="username"
                  fnc={this.getInputText}
                />
                <Input
                  type="text"
                  label="Email"
                  name="userEmail"
                  fnc={this.getInputText}
                />
                <Input
                  type="password"
                  label="Password"
                  name="userPassword"
                  fnc={this.getInputText}
                />
                <Input
                  type="password"
                  label="Type your password again"
                  name="userConfPassword"
                  fnc={this.getInputText}
                />
                <label className="checkbox">
                  Doctor
                  <input
                    type="checkbox"
                    name="isDoctor"
                    onChange={(e) => this.checkboxHandle(e)}
                  />
                  <span className="checkmark"></span>
                </label>
                <button className="signup-btn" onClick={this.signUp}>
                  Sign Up
                </button>
                <div className="sm-btns">
                  <a className="btn-floating btn-fb" href="#index">
                    <i className="fab fa-facebook-f"> </i>
                  </a>
                  <a className="btn-floating btn-gplus" href="#index">
                    <i className="fab fa-google-plus-g"> </i>
                  </a>
                </div>
              </Col>
              <div className="signup-social">
                {this.renderRedirect()}
                <div className="btn-container">{fbContent}</div>
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
}

export default register;
