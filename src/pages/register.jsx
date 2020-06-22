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
import { GoogleLogin } from "react-google-login";

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
    validateName: "",
    inputName: "label",
    validateEmail: "",
    inputEmail: "label",
    validatePassword: "",
    inputPassword: "label",
    validateConfPassword: "",
    inputConfPassword: "label",
    userData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.auth !== this.state.auth) {
      this.setState({ redirect: true });
    }
  }

  signUp = (event) => {
    if (this.state.userPassword.length > 5) {
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
          repeatPwd: Base64.encode(this.state.userConfPassword),
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
              e: Base64.encode(this.state.userEmail),
              u: Base64.encode(this.state.username),
              r: this.state.isDoctor
                ? Base64.encode("doctor")
                : Base64.encode("user"),
            };
            localStorage.setItem(Base64.encode("user"), JSON.stringify(user));
            this.setState({ auth: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  validateEmail = (email) => {
    // eslint-disable-next-line
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

  validate = (event) => {
    if (event.target.name === "username") {
      if (!event.target.value) {
        this.setState({
          validateName: "Field required.",
          inputName: "labelError",
        });
      } else if (event.target.value.length < 5) {
        this.setState({
          validateName: "Name should be at least 5 characters long.",
          inputName: "labelError",
        });
      } else {
        this.setState({ validateName: "", inputName: "label" });
      }
    } else if (event.target.name === "userEmail") {
      if (!event.target.value) {
        this.setState({
          validateEmail: "Field required.",
          inputEmail: "labelError",
        });
      } else if (!this.validateEmail(event.target.value)) {
        this.setState({
          validateEmail: "Enter a valid email.",
          inputEmail: "labelError",
        });
      } else {
        this.setState({ validateEmail: "", inputEmail: "label" });
      }
    } else if (event.target.name === "userPassword") {
      if (!event.target.value) {
        this.setState({
          validatePassword: "Field required.",
          inputPassword: "labelError",
        });
      } else if (event.target.value.length < 6) {
        this.setState({
          validatePassword: "Password should be at least 6 characters long.",
          inputPassword: "labelError",
        });
      } else {
        this.setState({ validatePassword: "", inputPassword: "label" });
      }
    } else if (event.target.name === "userConfPassword") {
      if (event.target.value !== this.state.userPassword) {
        this.setState({
          validateConfPassword: "Passwords doesn't match.",
          inputConfPassword: "labelError",
        });
      } else {
        this.setState({ validateConfPassword: "", inputConfPassword: "label" });
      }
    }
  };

  getInputText = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });

    this.validate(event);
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
    let email = response.email;
    let username = email.substring(0, email.lastIndexOf("@"));

    if (response.status !== "unknown") {
      console.log(response);

      fetch("http://localhost:3100/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: response.email,
          username: username,
          pwd: Base64.encode("facebookpass"),
          repeatPwd: Base64.encode("facebookpass"),
          role: "user",
          avatar: response.picture.data.url,
          mediaConnected: true,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode(username),
              r: Base64.encode("user"),
            };
            localStorage.setItem(
              Base64.encode("user"),
              JSON.stringify(userData)
            );
            this.setState({
              username: username,
              userEmail: email,
              auth: true,
            });
          } else {
            console.log("user already exists, logging in.");
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode(username),
              r: Base64.encode("user"),
            };
            localStorage.setItem(
              Base64.encode("user"),
              JSON.stringify(userData)
            );
            this.setState({
              username: username,
              userEmail: email,
              auth: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  responseGoogle = (response) => {
    console.log(response.profileObj);
    let email = response.profileObj.email;
    let username = email.substring(0, email.lastIndexOf("@"));

    if (!response.error) {
      fetch("http://localhost:3100/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          pwd: Base64.encode("googlepass"),
          repeatPwd: Base64.encode("googlepass"),
          role: "user",
          avatar: response.profileObj.imageUrl,
          mediaConnected: true,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode(username),
              r: Base64.encode("user"),
            };
            localStorage.setItem(
              Base64.encode("user"),
              JSON.stringify(userData)
            );

            this.setState({
              username: username,
              userEmail: email,
              auth: true,
            });
          } else {
            console.log("user already exists, logging in.");
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode(username),
              r: Base64.encode("user"),
            };
            localStorage.setItem(
              Base64.encode("user"),
              JSON.stringify(userData)
            );

            this.setState({
              username: username,
              userEmail: email,
              auth: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
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

    let glContent = (
      <GoogleLogin
        clientId="136742983571-78dlhp9sleetv02j1guegd8f2pn6ti45.apps.googleusercontent.com"
        buttonText={<span>Continue with Google</span>}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        className="social-btn btn-google"
        cookiePolicy={"single_host_origin"}
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
                  classLabel={this.state.inputName}
                />
                <span className="validate-msg">{this.state.validateName}</span>
                <Input
                  type="text"
                  label="Email"
                  name="userEmail"
                  fnc={this.getInputText}
                  classLabel={this.state.inputEmail}
                />
                <span className="validate-msg">{this.state.validateEmail}</span>
                <Input
                  type="password"
                  label="Password"
                  name="userPassword"
                  fnc={this.getInputText}
                  classLabel={this.state.inputPassword}
                />
                <span className="validate-msg">
                  {this.state.validatePassword}
                </span>
                <Input
                  type="password"
                  label="Type your password again"
                  name="userConfPassword"
                  fnc={this.getInputText}
                  classLabel={this.state.inputConfPassword}
                />
                <span className="validate-msg">
                  {this.state.validateConfPassword}
                </span>
                <div className="checkbox-input">
                  <label className="checkbox">
                    Doctor
                    <input
                      type="checkbox"
                      name="isDoctor"
                      onChange={(e) => this.checkboxHandle(e)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>

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
                <div className="btn-container">{glContent}</div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default register;
