import React, { Component } from "react";
import Post from "../components/Post";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class home extends Component {
  render() {
    return (
      <Container className="home" fluid={true}>
        <div>
          <HomeNav></HomeNav>
        </div>
        <Container className="post-container">
          <Row>
            <Col lg={8} md={8} xs={12}>
              <Post
                id="1"
                topic="Is coronavirus dangerous?"
                body="Coronavirus and flu share many similar symptoms, making it difficult to diagnose without a test.The main coronavirus symptoms to look out for are fever and a cough. "
                user=""
                replies="158"
                time="1h"
              ></Post>
              <Post
                id="2"
                topic="What are the syptoms of coronavirus?"
                body="The main signs of infection are a high temperature (fever) and a cough. This can be followed by shortness of breath and breathing difficulties. Some people get seriously ill and die from multiple organ failure, but many have very mild symptoms or none at all."
                user=""
                replies="512"
                time="2h"
              ></Post>
              <Post
                id="3"
                topic="Are people infectious before symptoms?"
                body="Maybe. There have been some rare reports of it happening. But most of the transmission of the virus seems to be after people have started showing symptoms, such as coughing and a fever."
                user=""
                replies="705"
                time="9h"
              ></Post>
              <Post
                id="4"
                topic="What is the risk to children?"
                body="Children appear to be relatively unaffected by coronavirus and have only mild symptoms, according to data from China. But, those with underlying lung problems, such as asthma, and other serious health problems, may have to be more careful. For most children, though, it will be a respiratory infection like any other and no cause for alarm."
                user=""
                replies="replies"
                time="time"
              ></Post>
              <Post
                id="5"
                topic="This a topic"
                body="This a body"
                user=""
                replies="replies"
                time="time"
              ></Post>
              <Post
                id="6"
                topic="This a topic"
                body="This a body"
                user=""
                replies="replies"
                time="time"
              ></Post>
            </Col>
            <Col lg={4} md={4}>
              <SideBlock></SideBlock>
              <SideBlock></SideBlock>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default home;
