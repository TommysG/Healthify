import React, { Component } from "react";
import "../css/welcome.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export class welcome extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar />
        <img className="background" src="images/doctors.png" alt="logo"></img>
        <img className="decor" src="images/decor.png" alt="logo"></img>
        <div className="header">
          <p className="healthify">HEALTHIFY</p>
          <p className="description">Good health and well-being.</p>
          <div style={{}} className="join-button">
            <Link id="login" to="/signup">
              <Button
                variant="contained"
                color="primary"
                className="btn btn-secondary"
                style={{
                  padding: "10px 40px"
                }}
                onClick={onclicked => console.log("Clicked")}
              >
                Join
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default welcome;
