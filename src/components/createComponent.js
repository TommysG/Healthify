import React, { Component } from "react";
import UserInfo from "./UserInfo";
import "../css/userInfo.css";
import "../css/createPost.css";

const CreatePostComponent = () => {
	return (
		<div className="createPost-container">
			<UserInfo />
			<div className="createView">
				<textarea id="titleArea" placeholder="Enter title..."></textarea>
				<textarea id="topicArea" placeholder="Enter text..."></textarea>
			</div>
		</div>
	);
};

export default CreatePostComponent;
