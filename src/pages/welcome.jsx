import React, { Component } from "react";
import "../css/welcome.css";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop/Backdrop";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Footer from "../components/Footer";

export class welcome extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="Main">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {/*<img className="background" src="images/doctors.png" alt="logo"></img>*/}
        <div className="background-image">
          <img className="decor" src="images/decor.png" alt="logo"></img>
        </div>
        <div className="header">
          <p className="healthify">HEALTHIFY</p>
          <p className="description">Good health and well-being.</p>
          <div>
            <Link id="login" to="/signup">
              <Button
                variant="secondary"
                className="join-button"
                onClick={(onclicked) => console.log("Clicked")}
              >
                Join
              </Button>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default welcome;
