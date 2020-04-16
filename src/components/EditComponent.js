import React from "react";
import "../css/EditComponent.css";

const EditComponent = ({ header, content }) => {
	return (
		<div className="info-div">
			<div className="info-container">
				<div className="content" id="header">
					{header}
				</div>
				<div className="content" id="editable">
					{content}
				</div>
			</div>
		</div>
	);
};

export default EditComponent;
