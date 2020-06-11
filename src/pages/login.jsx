import React, { Component } from "react";
import "../css/login.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop/Backdrop";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import auth from "../Auth.js";

export class login extends Component {
	state = {
		userEmail: "",
		userPassword: "",
		sideDrawerOpen: false,
	};

	logIn = (event) => {
		console.log("Checking for: " + this.state.userEmail);
		console.log("Given password: " + this.state.userPassword);
		auth.login(this.state.userEmail, this.state.userPassword);
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

	render() {
		let backdrop;

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
								<Input
									type="text"
									label="Email"
									name="userEmail"
									fnc={this.getInputText}
								></Input>
								<Input
									type="password"
									label="Password"
									name="userPassword"
									fnc={this.getInputText}
								></Input>
								<Link to="/home">
									<button
										className="login-btn"
										href="/home"
										onClick={this.logIn}
									>
										Login
									</button>
								</Link>
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
								<div className="btn-container">
									<button className="social-btn btn-facebook">
										<img
											src="https://static.parastorage.com/services/login-statics/1.742.0/images/facebook-logo.svg"
											alt="img"
										></img>
										<span>Login with Facebook</span>
									</button>
								</div>
								<div className="btn-container">
									<button className="social-btn btn-google">
										<img
											alt="img"
											src="https://static.parastorage.com/services/login-statics/1.742.0/images/google-logo.svg"
										></img>
										<span>Login with Google</span>
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

export default login;
