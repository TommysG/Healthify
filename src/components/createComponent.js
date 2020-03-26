import React from "react";
import UserInfo from "./UserInfo";
import "../css/createPost.css";
import { Row } from "react-bootstrap";

const CreatePostComponent = () => {
  return (
    <div className="createPost-container">
      <Row>
        <UserInfo />
        <div className="createView">
          <textarea id="titleArea" placeholder="Enter title..."></textarea>
          <textarea id="topicArea" placeholder="Enter text..."></textarea>
        </div>
      </Row>
    </div>
  );
};

export default CreatePostComponent;
