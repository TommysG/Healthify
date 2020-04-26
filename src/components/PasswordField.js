import React from "react";
import Container from "react-bootstrap/Container";

import "../css/PasswordField.css";

const PasswordField = ({ title, hint }) => {
  return (
    <Container className="main">
      <div className="title-div">{title}</div>
      <div className="password-div">
        <input
          className="password-input"
          type="password"
          placeholder={hint}
        ></input>
      </div>
    </Container>
  );
};

export default PasswordField;
