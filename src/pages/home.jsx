import React, { Component } from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class home extends Component {
	render() {
		return (
			<Container className="home" fluid={true}>
				<div>
					<HomeNav></HomeNav>
				</div>
				<Container className="post-container">
					<Row>
						<Col lg={8} md={8} xs={12}>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>
							<Post></Post>
						</Col>
						<Col lg={4} md={4}>
							<SideBlock></SideBlock>
							<SideBlock></SideBlock>
						</Col>
					</Row>
				</Container>
			</Container>
		);
	}
}

export default home;
