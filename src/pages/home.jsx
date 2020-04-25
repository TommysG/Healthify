import React, { Component } from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Link } from "react-router-dom";
import data from "../data.json";
import Button from "react-bootstrap/Button";

import NavButton from "../components/NavButton";

export class home extends Component {
	state = {
		sideDrawerOpen: false,
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
			backdrop = <BackdropHome click={this.backdropClickHandler} />;
		}

		const posts = data.map((item) => (
			<Post
				key={item.id}
				id={item.id}
				title={<Link to={`/home/viewpost/${item.id}`}>{item.title}</Link>}
				body={item.body}
				replies={item.replies}
				time={item.time}
			></Post>
		));
		return (
			<Container className="home" fluid={true}>
				<HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
				<SideDrawerHome show={this.state.sideDrawerOpen} />
				{backdrop}

				<Container className="post-container">
					<Row>
						<Col lg={8} md={8} xs={12}>
							<Row className="header-row">
								<ButtonToolbar className="btn-toolbar home-toolbar">
									<DropdownButton variant="secondary" title={"Sort By"}>
										<DropdownItem eventKey="1">Recent</DropdownItem>
										<DropdownItem eventKey="2">Most Viewed</DropdownItem>
										<DropdownItem eventKey="3">Most Liked</DropdownItem>
									</DropdownButton>

									<a href="/createpost">
										<Button variant="secondary" className="createBtn">
											New Topic
										</Button>
									</a>
								</ButtonToolbar>
							</Row>
							{posts}
							<ul class="breadcrumb">
								<li>
									<NavButton number="1" />
								</li>
								<li>
									<NavButton number="2" />
								</li>
								<li>
									<NavButton number="3" />
								</li>
								<li>
									<NavButton number="4" />
								</li>
								<li>
									<NavButton number=">" />
								</li>
							</ul>
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
