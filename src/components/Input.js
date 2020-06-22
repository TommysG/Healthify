import React from "react";
import "../css/input.css";

const Input = ({ type, label, name, fnc, classLabel }) => {
  return (
    <div className="input-field">
      <input
        name={name}
        type={type}
        autoComplete="off"
        onChange={fnc}
        required
      />
      <label htmlFor={name} className={classLabel}>
        <span className="label-name">{label}</span>
      </label>
    </div>
  );
};

export default Input;
