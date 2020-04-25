import React from "react";
import "../css/navButtons.css";

const NavButton = ({ number }) => {
	return (
		<div>
			<button className="button-div">{number}</button>
		</div>
	);
};

export default NavButton;
