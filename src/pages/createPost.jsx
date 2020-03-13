import React, { Component } from "react";

import CreatePostComponent from "../components/createComponent";
import HomeNav from "../components/HomeNav";
import Col from "react-bootstrap/Col";
import NavList from "../components/NavList";

import { Container } from "react-bootstrap";

export class createPost extends Component {
	render() {
		return (
			<div className="mainView">
				<HomeNav />
				<Container>
					<Col>
						<NavList />
						<CreatePostComponent />
						<button className="replyButton">Post</button>
					</Col>
				</Container>
			</div>
		);
	}
}

export default createPost;
