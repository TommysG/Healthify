import React, { Component } from "react";

import HomeNav from "../components/HomeNav";
import Container from "react-bootstrap/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";

import "../css/settings.css";
import { Base64 } from "js-base64";
import { Posts } from "../components/Posts";
import { Redirect } from "react-router-dom";

export class settings extends Component {
	state = {
		sideDrawerOpen: false,
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		role: "",
		avatar: "",
		oldPassword: "",
		newPassword: "",
		repeatPassword: "",
		isDoctor: false,
		posts: [],
		userPostsVoted: [],
		postUpvotes: 0,
		isLoaded: "",
		error: "",
		redirect: false,
		show: false,
		settingsStatus: "",
		usernameValidate: "",
		oldPasswordValidate: "",
		newPasswordValidate: "",
		confirmPasswordValidate: "",
	};

	//Toggle showSideDrawer (mobile devices only)
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	//Closes sideDrawer (mobile devices only)
	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	//Loads user's info on page load
	componentDidMount() {
		this.loadUser();
		this.myPosts();
	}

	//check if votes are updated
	//and updates the posts component
	componentDidUpdate(prevProps, prevState) {
		//check if number of upvotes changed
		if (prevState.postUpvotes !== this.state.postUpvotes) {
			console.log("upvotes before: " + prevState.postUpvotes);
			console.log("upvotes now: " + this.state.postUpvotes);
			//this.showPosts(); // fetching again all the posts
			this.myPosts();
		}
	}

	//Calls api to retrieve user's data from database
	loadUser = () => {
		const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
		fetch("http://localhost:3100/api/user/" + Base64.decode(user.e), {
			method: "GET",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				this.setState({
					username: response.username,
					email: response.email,
					firstName: response.name,
					lastName: response.surname,
					role: response.role,
					avatar: response.avatar,
					isDoctor: response.role === "doctor" ? true : false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//Gets user's post from the database
	myPosts = () => {
		const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
		let url1 = "http://localhost:3100/api/userPosts/" + Base64.decode(user.e);
		let url2 =
			"http://localhost:3100/api/userPostsVotes/" + Base64.decode(user.e);

		Promise.all([fetch(url1), fetch(url2)])
			.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
			.then(([data1, data2]) => {
				console.log(data1);
				this.setState({
					posts: data1,
					userPostsVoted: data2,
				});
				setTimeout(() => {
					this.setState({ isLoaded: true });
				}, 200);
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					isLoaded: true,
					error: err,
				});
			});
	};

	//handles upvote on posts
	handleUpvote = (e) => {
		console.log("upvoting as " + this.state.email);
		console.log(e.target.id);
		fetch("http://localhost:3100/api/upvotePost", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			body: JSON.stringify({
				user_id: this.state.email,
				post_id: e.target.id,
			}),
		})
			.then((response) => {
				console.log(response);
				this.setState({ postUpvotes: this.state.postUpvotes + 1 });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//Checks new input give by user and displays proper message on error
	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});

		if (event.target.name === "username") {
			if (!event.target.value) {
				this.setState({ usernameValidate: "Username required." });
			} else if (event.target.value.length < 5) {
				this.setState({
					usernameValidate: "Username should be at least 5 characters long.",
				});
			} else {
				this.setState({ usernameValidate: "" });
			}
		} else if (event.target.name === "oldPassword") {
			if (!event.target.value) {
				this.setState({ oldPasswordValidate: "Field required." });
			} else if (event.target.value.length < 6) {
				this.setState({
					oldPasswordValidate: "Password should be at least 6 characters long.",
				});
			} else {
				this.setState({ oldPasswordValidate: "" });
			}
		} else if (event.target.name === "newPassword") {
			if (!event.target.value) {
				this.setState({ newPasswordValidate: "Field required." });
			} else if (event.target.value.length < 6) {
				this.setState({
					newPasswordValidate: "Password should be at least 6 characters long.",
				});
			} else {
				this.setState({ newPasswordValidate: "" });
			}
		} else if (event.target.name === "repeatPassword") {
			if (!event.target.value) {
				this.setState({ confirmPasswordValidate: "Field required." });
			} else if (event.target.value !== this.state.newPassword) {
				this.setState({ confirmPasswordValidate: "Password doesn't match." });
			} else {
				this.setState({ confirmPasswordValidate: "" });
			}
		}
	};

	//Updates user's info if there are no errors in validation
	saveChanges = () => {
		const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
		fetch("http://localhost:3100/api/user", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			body: JSON.stringify({
				email: Base64.decode(user.e),
				username: this.state.username,
				name: this.state.firstName,
				surname: this.state.lastName,
				avatar: this.state.avatar,
				role: this.state.isDoctor ? "doctor" : "user",
			}),
		})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					this.setState({ settingsStatus: "Profile successfully updated" });
				} else {
					this.setState({
						settingsStatus: "Error updating profile. Username maybe exists.",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		//Update user's password
		if (this.state.newPassword && this.state.oldPassword) {
			fetch("http://localhost:3100/api/changePassword", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					accept: "application/json",
				},
				body: JSON.stringify({
					email: Base64.decode(user.e),
					oldPwd: Base64.encode(this.state.oldPassword),
					pwd: Base64.encode(this.state.newPassword),
					repeatPwd: Base64.encode(this.state.repeatPassword),
				}),
			})
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	//Deletes user's account
	deleteAccount = () => {
		fetch("http://localhost:3100/api/user/" + this.state.email, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
		})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					localStorage.removeItem(Base64.encode("user"));
					this.setState({ redirect: true });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//Redirects to login (called when user is deleted)
	renderRedirect() {
		if (this.state.redirect) {
			return <Redirect to="/login"></Redirect>;
		}
	}

	//Handles checkbox functionality
	checkboxHandle = (e) => {
		this.setState({ isDoctor: !this.state.isDoctor });
	};

	//Display content to screen
	render() {
		let backdrop;
		const { posts, userPostsVoted, isLoaded, error } = this.state;

		if (this.state.sideDrawerOpen) {
			backdrop = <BackdropHome click={this.backdropClickHandler} />;
		}

		const profileSettings = () => {
			return (
				<Container className="profile-settings">
					<div className="controls">
						<label>Email addresss</label>
						<input
							type="text"
							className="form-control"
							placeholder="Email addresss"
							value={this.state.email}
							name="email"
							readOnly
						/>
					</div>

					<div className="controls">
						<label>Username</label>
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							value={this.state.username}
							name="username"
							onChange={this.handleInputChange}
						/>
						<span style={{ color: "rgb(255, 53, 71)" }}>
							{this.state.usernameValidate}
						</span>
					</div>

					<div className="name-inputs">
						<div className="firstname-input">
							<label>First name</label>
							<input
								type="text"
								className="form-control"
								placeholder="First Name"
								name="firstName"
								value={
									this.state.firstName === "null" ? "" : this.state.firstName
								}
								onChange={this.handleInputChange}
							/>
						</div>

						<div className="lastname-input">
							<label>Last name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								name="lastName"
								value={
									this.state.lastName === "null" ? "" : this.state.lastName
								}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>

					<div className="checkbox-input">
						<span style={{ marginRight: "15px" }}>Doctor</span>
						<label className="checkbox">
							<input
								type="checkbox"
								name="isDoctor"
								checked={this.state.isDoctor}
								onChange={this.checkboxHandle}
							/>
							<span className="checkmark"></span>
						</label>
					</div>
				</Container>
			);
		};

		const passSettings = () => {
			return (
				<Container className="profile-settings">
					<div className="controls">
						<label>Current password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter current password"
							name="oldPassword"
							onChange={this.handleInputChange}
						/>
						<span style={{ color: "rgb(255, 53, 71)" }}>
							{this.state.oldPasswordValidate}
						</span>
					</div>

					<div className="controls">
						<label>New password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter new password"
							name="newPassword"
							onChange={this.handleInputChange}
						/>
						<span style={{ color: "rgb(255, 53, 71)" }}>
							{this.state.newPasswordValidate}
						</span>
					</div>

					<div className="controls">
						<label>Repeat password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Confirm new password"
							name="repeatPassword"
							onChange={this.handleInputChange}
						/>
						<span style={{ color: "rgb(255, 53, 71)" }}>
							{this.state.confirmPasswordValidate}
						</span>
					</div>
				</Container>
			);
		};

		const dialog = () => {
			return (
				<Modal show={this.state.show} onHide={handleClose}>
					<Modal.Header className="close-Button" closeButton>
						<Modal.Title>Delete Account</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure you want to delete your account?</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button
							variant="primary"
							style={{ backgroundColor: "#dc3545", color: "white" }}
							onClick={this.deleteAccount}
						>
							Delete
						</Button>
					</Modal.Footer>
				</Modal>
			);
		};

		const handleClose = () => this.setState({ show: false });
		const handleShow = () => this.setState({ show: true });

		const buttons = () => {
			return (
				<div>
					<span
						style={
							this.state.settingsStatus.charAt(0) === "E"
								? { color: "rgb(255, 53, 71)" }
								: { color: "green" }
						}
					>
						{this.state.settingsStatus}
					</span>
					<Button
						variant="secondary"
						style={{ float: "right", marginBottom: "50px" }}
						onClick={this.saveChanges}
					>
						Save Changes
					</Button>
					<div style={{ float: "right" }}>
						<Button
							variant="secondary"
							style={{ backgroundColor: "#ff3547", marginRight: "10px" }}
							onClick={handleShow}
						>
							Delete account
						</Button>
						{dialog()}
					</div>
				</div>
			);
		};

		return (
			<div className="main-container">
				{this.renderRedirect()}
				<HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
				<SideDrawerHome show={this.state.sideDrawerOpen} />
				{backdrop}
				<Container>
					<Tabs>
						<TabList>
							<Tab>Profile</Tab>
							<Tab>Password</Tab>
							<Tab>My posts</Tab>
						</TabList>
						<TabPanel>
							{profileSettings()}
							{buttons()}
						</TabPanel>
						<TabPanel>
							{passSettings()}
							{buttons()}
						</TabPanel>
						<TabPanel>
							<div className="post-container"></div>
							<span>
								Your active post(s) are: {posts.length ? posts.length : 0}
							</span>
							<Posts
								posts={posts.length ? posts : []}
								loading={isLoaded}
								postsVoted={userPostsVoted}
								handleUpvote={this.handleUpvote}
								error={error}
							></Posts>
						</TabPanel>
					</Tabs>
				</Container>
			</div>
		);
	}
}

export default settings;
