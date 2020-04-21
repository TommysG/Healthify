import React from "react";
import UserInfo from "./UserInfo";
import "../css/createPost.css";
import { Row } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const CreatePostComponent = () => {
  return (
    <div className="createPost-container">
      <Row>
        <UserInfo />
        <div className="createView">
          <div className="category-div">
            <ButtonToolbar className="btn-toolbar home-toolbar">
              <DropdownButton title={"Select Category"}>
                <DropdownItem eventKey="1">Category 1</DropdownItem>
                <DropdownItem eventKey="2">Category 2</DropdownItem>
                <DropdownItem eventKey="3">Category 3</DropdownItem>
              </DropdownButton>
            </ButtonToolbar>
          </div>
          <textarea id="titleArea" placeholder="Enter title..."></textarea>
          <textarea id="topicArea" placeholder="Enter text..."></textarea>
        </div>
      </Row>
    </div>
  );
};

export default CreatePostComponent;
