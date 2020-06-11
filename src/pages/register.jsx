import React from "react";
import "../css/register.css";
import "../css/input.css";
import Input from "../components/Input";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Backdrop from "../components/Backdrop/Backdrop";
import SideDrawer from "../components/SideDrawer/SideDrawer";

import { Base64 } from "js-base64";
import Navbar from "../components/Navbar";
import { Component } from "react";

export class register extends Component {
	state = {
		sideDrawerOpen: false,
		username: "",
		userEmail: "",
		userPassword: "",
		userConfPassword: "",
		userIsDoc: false,
	};

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
				role: "user",
			}),
		})
			.then((response) => {
				console.log(response);
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
	render() {
		let backdrop;

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
									<input type="checkbox" />
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
}

export default register;
