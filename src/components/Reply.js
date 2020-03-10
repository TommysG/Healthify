import React from "react";
<<<<<<< HEAD
import "../css/reply.css";

const Reply = () => {
  return (
    <div className="main">
      <div className="replier">
        <img
          src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/A.svg"
          alt="Avatar"
          style={{
            position: "relative",
            width: "50%",
            height: "50%",
            marginLeft: "25%",
            marginTop: "20%"
          }}
        />
        <h4 style={{ width: "100%", textAlign: "center" }}>YOU</h4>
      </div>
      <div className="replyBody">
        <textarea placeholder="Reply..."></textarea>
      </div>
    </div>
  );
=======
import UserInfo from "../components/UserInfo";
import "../css/reply.css";

const Reply = () => {
	return (
		<div className="main">
			<div className="replier">
				<img
					src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/A.svg"
					alt="Avatar"
					style={{
						position: "relative",
						width: "50%",
						height: "50%",
						marginLeft: "25%",
						marginTop: "20%",
					}}
				/>
				<h4 style={{ width: "100%", textAlign: "center" }}>YOU</h4>
			</div>
			<div className="replyBody">
				<textarea>Reply...</textarea>
			</div>
		</div>
	);
>>>>>>> 8b1a7d2fba4050db26cc4e2859304b874113bf59
};

export default Reply;
