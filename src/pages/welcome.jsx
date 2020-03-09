import React, { Component } from "react";
import "../css/welcome.css";

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
            <button
              href="/login"
              variant="contained"
              color="primary"
              style={{
                background: "#4D4D4D",
                color: "#f0f0f0",
                padding: "10px 40px"
              }}
              onClick={onclicked => console.log("Clicked")}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default welcome;
