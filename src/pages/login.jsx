import React, { Component } from "react";
import "../css/login.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop/Backdrop";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import { Auth } from "../Auth";
import { Base64 } from "js-base64";
import ReactFacebookLogin from "react-facebook-login";
import Spinner from "react-bootstrap/Spinner";
import { GoogleLogin } from "react-google-login";

export class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      validateEmail: "",
      validatePassword: "",
      inputEmail: "label",
      inputPassword: "label",
      sideDrawerOpen: false,
      redirect: false,
      auth: false,
      user: "",
      loadingLogin: false,
      wrongCredentials: false,
    };
  }

  componentDidMount() {
    if (this.props.isLogged) {
      this.setState({ redirect: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.auth !== this.state.auth) {
      localStorage.setItem(
        Base64.encode("user"),
        JSON.stringify(this.state.user)
      );
      this.setState({ redirect: true });
    }
  }

  logIn = (event) => {
    this.setState({ loadingLogin: true });
    setTimeout(() => {
      const userData = {
        email: this.state.userEmail,
        pwd: Base64.encode(this.state.userPassword),
      };

      Auth(userData).then((result) => {
        if (result.status === 200) {
          console.log("Logged in successfully");
          console.log(result.body);
          const user = {
            e: Base64.encode(result.body.email),
            u: Base64.encode(result.body.username),
            r: Base64.encode(result.body.role),
          };

          this.setState({
            auth: true,
            user: user,
          });
        } else {
          console.log("Wrong credentials");
          this.setState({
            loadingLogin: false,
            wrongCredentials: true,
            inputEmail: "labelError",
            inputPassword: "labelError",
          });
        }
      });
    }, 1000);
  };

  loginLoading = () => {
    if (this.state.loadingLogin) {
      return (
        <Spinner
          animation="border"
          style={{
            color: "cornflowerblue",
            verticalAlign: "middle",
            marginLeft: "15px",
          }}
        />
      );
    } else if (this.state.wrongCredentials) {
      return (
        <span
          style={{
            color: "red",
            verticalAlign: "middle",
            marginLeft: "15px",
          }}
        >
          Wrong credentials
        </span>
      );
    }
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

  validateLogin = (event) => {
    if (event.target.name === "userEmail") {
      if (!event.target.value) {
        this.setState({
          validateEmail: "Field Required.",
          inputEmail: "labelError",
        });
      } else {
        this.setState({ validateEmail: "", inputEmail: "label" });
      }
    } else if (event.target.name === "userPassword") {
      if (!event.target.value) {
        this.setState({
          validatePassword: "Field Required.",
          inputPassword: "labelError",
        });
      } else {
        this.setState({ validatePassword: "", inputPassword: "label" });
      }
    }
  };

  getInputText = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.validateLogin(event);
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  responseFacebook = (response) => {
    let email = response.email;
    let username = email.substring(0, email.lastIndexOf("@"));

    if (response.status !== "unknown") {
      fetch("http://localhost:3100/api/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          pwd: Base64.encode("facebookpass"),
          repeatPwd: Base64.encode("facebookpass"),
          role: "user",
          avatar: response.picture.data.url,
          mediaConnected: true,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode(username),
              r: Base64.encode("user"),
            };
            this.setState({
              user: userData,
              auth: true,
            });
          } else {
            console.log("user already exists, logging in.");
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode("username"),
              r: Base64.encode("user"),
            };
            this.setState({
              user: userData,
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

            this.setState({
              user: userData,
              auth: true,
            });
          } else if (response.status === 400) {
            console.log("user already exists, logging in.");
            const userData = {
              e: Base64.encode(email),
              u: Base64.encode("username"),
              r: Base64.encode("user"),
            };

            this.setState({
              user: userData,
              auth: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        textButton={<span>Login with facebook</span>}
      />
    );

    let glContent = (
      <GoogleLogin
        clientId="136742983571-78dlhp9sleetv02j1guegd8f2pn6ti45.apps.googleusercontent.com"
        buttonText={<span>Login with Google</span>}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        className="social-btn btn-google btn-google-login"
        cookiePolicy={"single_host_origin"}
      />
    );

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="login-page">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container fluid className="login-container">
          <header className="top-head"></header>
          <div className="form">
            <h1 className="login-title">Login</h1>
            <p className="signup-link">
              Don't have a Healthify account? <Link to="/signup">Sign Up</Link>
            </p>
            <Row className="login-section">
              <Col xs className="login-email">
                <div>
                  <Input
                    type="text"
                    label="Email"
                    name="userEmail"
                    fnc={this.getInputText}
                    classLabel={this.state.inputEmail}
                  ></Input>
                  <span style={{ color: "red" }}>
                    {this.state.validateEmail}
                  </span>
                </div>
                <div>
                  <Input
                    type="password"
                    label="Password"
                    name="userPassword"
                    fnc={this.getInputText}
                    classLabel={this.state.inputPassword}
                  ></Input>
                  <span style={{ color: "red" }}>
                    {this.state.validatePassword}
                  </span>
                </div>
                {this.renderRedirect()}
                <div>
                  <button className="login-btn" onClick={this.logIn}>
                    Login
                  </button>
                  {this.loginLoading()}
                </div>
                <div className="sm-btns">
                  <a className="btn-floating btn-fb" href="#index">
                    <i className="fab fa-facebook-f"> </i>
                  </a>
                  <a className="btn-floating btn-gplus" href="#index">
                    <i className="fab fa-google-plus-g"> </i>
                  </a>
                </div>
              </Col>
              <div className="login-social">
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

export default login;
