import React, { Component } from "react";

import HomeNav from "../components/HomeNav";
import EditComponent from "../components/EditComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/settings.css";

export class settings extends Component {
	render() {
		return (
			<div className="main-container">
				<HomeNav></HomeNav>
				<Container>
					<Row className="tab-navigation">
						<button className="navBtn" id="selected">
							Profile
						</button>
						<button className="navBtn" id="unselected">
							Password
						</button>
					</Row>
					<Col className="display-container">
						<Row className="header-div">
							<div className="info-header">BASIC INFO</div>
							<div className="activity-header">Recent Activity</div>
						</Row>
						<Row className="basicInfo-container">
							<div className="user-settings">
								<EditComponent content="AVATAR"></EditComponent>
								<EditComponent
									header="Name"
									content="Lambros Kolovos"
								></EditComponent>
								<EditComponent header="Age" content="20"></EditComponent>
								<EditComponent header="Gender" content="Male"></EditComponent>
								<EditComponent
									header="Location"
									content="Greece"
								></EditComponent>
								<EditComponent
									header="Email"
									content="lambroskol@gmail.com"
								></EditComponent>
							</div>
							<div className="activity-display">
								<div>
									<ul>Replied to X</ul>
									<ul>Created A</ul>
									<ul>Liked Y's comment in A</ul>
									<ul>All the above with design</ul>
								</div>
							</div>
						</Row>
						<Row className="button-row">
							<button className="changeBtn">Save changes</button>
						</Row>
					</Col>
				</Container>
			</div>
		);
	}
}

export default settings;
