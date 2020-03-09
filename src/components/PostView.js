import React from "react";
import "../App.css";

const PostView = ({ title, date, content }) => {
	return (
		<div className="postContainer">
			<div className="userInfo">
				<div className="userProfile">
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
				<div className="userStats"></div>
			</div>
			<div className="postInfo">
				<div className="postHeader">
					<div className="postTitle">
						<h3>{title}</h3>
					</div>
					<div className="postDate">
						<h5>{date}</h5>
					</div>
				</div>
				<div className="postBody">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default PostView;
