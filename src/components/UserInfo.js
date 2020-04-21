import React, { Component } from "react";
import "../css/userInfo.css";

export class UserInfo extends Component {
	render() {
		return (
			<div className="userInfo">
				<div className="userProfilePicture">
					<img
						src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/J.svg"
						alt="Avatar"
						style={{ position: "relative", width: "60px", height: "60px" }}
					/>
					<h4>Jake</h4>
				</div>
			</div>
		);
	}
}

export default UserInfo;
