import React from "react";

import "../css/reply.css";

const Reply = () => {
	return (
		<div className="replyContainer">
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
			<textarea className="replyArea" placeholder="Reply..."></textarea>
		</div>
	);
};
export default Reply;
