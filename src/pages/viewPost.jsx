import React, { Component } from "react";
import Navbar from "../components/Navbar";
import PostView from "../components/PostView";
import NavList from "../components/NavList";
import Reply from "../components/Reply";

export class viewPost extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="view-container">
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
          <Reply />
          <button className="replyButton">Reply!</button>
        </div>
      </div>
    );
  }
=======
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

					<Reply />
					<button className="replyButton">Reply!</button>
				</div>
			</div>
		);
	}
>>>>>>> 8b1a7d2fba4050db26cc4e2859304b874113bf59
}

export default viewPost;
