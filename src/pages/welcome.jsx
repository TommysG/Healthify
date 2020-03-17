import React, { Component } from "react";
import "../css/welcome.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

export class welcome extends Component {
  render() {
    return (
      <div className="Main">
        <img className="background" src="images/doctors.png" alt="logo"></img>
        <img className="decor" src="images/decor.png" alt="logo"></img>
        <div className="header">
          <p className="healthify">HEALTHIFY</p>
          <p className="description">Good health and well-being.</p>
          <div style={{}} className="join-button">
            <Button
              href="/login"
              variant="contained"
              color="primary"
              className="btn btn-secondary"
              style={{
                background: "#4D4D4D",
                color: "#f0f0f0",
                padding: "10px 40px"
              }}
              onClick={onclicked => console.log("Clicked")}
            >
              <Link id="login" to="/login">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default welcome;
