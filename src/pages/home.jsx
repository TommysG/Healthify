import React from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import data from "../data.json";

function home() {
	const posts = data.map((item) => (
		<Post
			key={item.id}
			id={item.id}
			title={<Link to={`/viewpost/${item.id}`}>{item.title}</Link>}
			body={item.body}
			replies={item.replies}
			time={item.time}
		></Post>
	));

	return (
		<Container className="home" fluid={true}>
			<div>
				<HomeNav></HomeNav>
			</div>
			<Container className="post-container">
				<Row>
					<Col lg={8} md={8} xs={12}>
						<Row className="header-row">
							<div className="filter-div">
								<button class="dropdown-toggle">
									Sort By
									<span class="caret"></span>
								</button>
								<div class="dropdown-content">
									<a href="#recent">Recent</a>
									<a href="#viewed">Most Viewed</a>
									<a href="#liked">Most Liked</a>
								</div>
							</div>
							<div className="button-div">
								<a href="/createPost">
									<button className="createBtn">New Topic</button>
								</a>
							</div>
						</Row>
						{posts}
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

export default home;
