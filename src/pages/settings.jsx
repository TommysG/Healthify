import React, { Component } from "react";

import HomeNav from "../components/HomeNav";
import EditComponent from "../components/EditComponent";
import PasswordField from "../components/PasswordField";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "react-bootstrap";

import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";

import "../css/settings.css";

export class settings extends Component {
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
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }
    return (
      <div className="main-container">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container>
          <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Password</Tab>
            </TabList>
            <TabPanel>
              <Container>
                <Col className="tab-navigation" id="Profile">
                  <Row className="header-div">
                    <div className="info-header">BASIC INFO</div>
                    <div className="activity-header">Recent Activity</div>
                  </Row>
                  <Row className="basicInfo-container">
                    <div className="user-settings">
                      <EditComponent content="AVATAR"></EditComponent>
                      <EditComponent
                        header="Name"
                        content="Lambros Kolovos"
                      ></EditComponent>
                      <EditComponent header="Age" content="20"></EditComponent>
                      <EditComponent
                        header="Gender"
                        content="Male"
                      ></EditComponent>
                      <EditComponent
                        header="Location"
                        content="Greece"
                      ></EditComponent>
                      <EditComponent
                        header="Email"
                        content="lambroskol@gmail.com"
                      ></EditComponent>
                    </div>
                    <div className="activity-display">
                      <div>
                        <ul>Replied to X</ul>
                        <ul>Created A</ul>
                        <ul>Liked Y's comment in A</ul>
                        <ul>All the above with design</ul>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container>
                <Col className="tab-navigation" id="Profile">
                  <Row className="header-div">
                    <div className="info-header">Change Password</div>
                    <div className="activity-header">Recent Activity</div>
                  </Row>
                  <Row className="basicInfo-container">
                    <div class="pass-settings">
                      <PasswordField
                        title="Current Password"
                        hint="Current Password"
                      />
                      <PasswordField title="New Password" hint="New Password" />
                      <PasswordField
                        title="Confirm Password"
                        hint="Confirm Password"
                      />
                    </div>
                    <div className="activity-display">
                      <div>
                        <ul>Replied to X</ul>
                        <ul>Created A</ul>
                        <ul>Liked Y's comment in A</ul>
                        <ul>All the above with design</ul>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Container>
            </TabPanel>
            <Button variant="secondary" type="submit" className="save-settings">
              Save
            </Button>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default settings;
