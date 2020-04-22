import React, { Component } from "react";

import HomeNav from "../components/HomeNav";
import EditComponent from "../components/EditComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../css/settings.css";

export class settings extends Component {
  render() {
    const displayPosts = (
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
                  <EditComponent header="Gender" content="Male"></EditComponent>
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
              <Row className="Pass-container">
                <div class="containerr">
                  <div class="row">
                    <div class="col-sm-4">
                      <label>Current Password</label>
                      <div class="form-group pass_show">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Current Password"
                        ></input>
                      </div>
                      <label>New Password</label>
                      <div class="form-group pass_show">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="New Password"
                        ></input>
                      </div>
                      <label>Confirm Password</label>
                      <div class="form-group pass_show">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Confirm Password"
                        ></input>
                      </div>
                      <div class="submit-button">
                        <a type="submit" href="/home">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
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
      </Tabs>
    );

    return (
      <div className="main-container">
        <HomeNav></HomeNav>
        {displayPosts}
      </div>
    );
  }
}

export default settings;
