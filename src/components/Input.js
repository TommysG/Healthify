import React from "react";
import "../css/input.css";

const Input = ({ type, label, name, fnc }) => {
	return (
		<div className="input-field">
			<input
				name={name}
				type={type}
				autoComplete="off"
				onChange={fnc}
				required
			/>
			<label htmlFor={name} className="label">
				<span className="label-name">{label}</span>
			</label>
		</div>
	);
};

export default Input;
