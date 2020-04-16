import React from "react";
import UserInfo from "./UserInfo";
import "../css/createPost.css";
import { Row } from "react-bootstrap";

const CreatePostComponent = () => {
	return (
		<div className="createPost-container">
			<Row>
				<UserInfo />
				<div className="createView">
					<div className="category-div">
						<button class="categoryBtn dropdown-toggle">
							Select Category
							<span class="caret"></span>
						</button>
						<div class="dropdown-content">
							<a href="#recent">Category A</a>
							<a href="#viewed">Category A</a>
							<a href="#liked">Category A</a>
						</div>
					</div>
					<textarea id="titleArea" placeholder="Enter title..."></textarea>
					<textarea id="topicArea" placeholder="Enter text..."></textarea>
				</div>
			</Row>
		</div>
	);
};

export default CreatePostComponent;
