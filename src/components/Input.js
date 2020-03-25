import React from "react";
import "../css/input.css";

const Input = ({ type, label }) => {
  return (
    <div className="input-field">
      <input name="input" type={type} autoComplete="off" required />
      <label htmlFor="input" className="label">
        <span className="label-name">{label}</span>
      </label>
    </div>
  );
};

export default Input;
