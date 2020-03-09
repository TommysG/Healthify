import React, { Component } from "react";
import "../css/postView.css";
import Navbar from "../components/Navbar";
import PostView from "../components/PostView";
import NavList from "../components/NavList";

export class viewPost extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<NavList />
				<div className="mainContainer">
					<PostView
						title="Corona"
						date="20 Fbb"
						content="Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. "
					/>
					<PostView
						title="Reply1"
						date="21 Feb"
						content="Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. "
					/>
					<PostView
						title="Reply2"
						date="22 Feb"
						content="Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. "
					/>
					<button className="replyButton">Reply!</button>
				</div>
			</div>
		);
	}
}

export default viewPost;
