import React, { Component } from "react";
import "../css/userInfo.css";

export class UserInfo extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="userInfo">
        <div className="userProfilePicture">
          <img
            src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/J.svg"
            alt="Avatar"
            style={{ position: "relative", width: "100%", height: "100%" }}
          />
          <h4 style={{ width: "100%", textAlign: "center" }}>Jake</h4>
          <div className="userStats">
            <h6>Likes: 50</h6>
            <h6>Posts: 241</h6>
          </div>
        </div>
      </div>
    );
  }
=======
	render() {
		return (
			<div className="userInfo">
				<div className="userProfilePicture">
					<img
						src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/J.svg"
						alt="Avatar"
						style={{ position: "relative", width: "100%", height: "100%" }}
					/>
					<h4 style={{ width: "100%", textAlign: "center" }}>Jake</h4>
					<div className="userStats">
						<h6>Likes: 50</h6>
						<h6>Posts: 241</h6>
					</div>
				</div>
			</div>
		);
	}
>>>>>>> 8b1a7d2fba4050db26cc4e2859304b874113bf59
}

export default UserInfo;
