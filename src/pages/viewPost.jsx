import React from "react";
import HomeNav from "../components/HomeNav";
import PostView from "../components/PostView";
import Reply from "../components/Reply";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data.json";

function viewPost({ match }) {
  const post = data.map((item) => {
    if (item.id.toString() === match.params.id)
      return (
        <PostView
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.body}
          date={item.time}
          style={`style`}
        ></PostView>
      );
    return null;
  });

  const replies = data.map((item, id) => {
    if (item.id.toString() === match.params.id) {
      return (
        <div key={item.id}>
          {item.postReplies.map((reply) => (
            <PostView
              key={reply.id}
              id={reply.id}
              title={reply.title}
              content={reply.content}
              date={reply.date}
            ></PostView>
          ))}
        </div>
      );
    }
    return null;
  });

  return (
    <div className="view-container">
      <HomeNav />
      <Container className="main-container">
        <Row>
          <Col lg={12} md={12} xs={12}>
            {post}
            {replies}
            <Reply />
            <button className="replyButton">Reply!</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default viewPost;
