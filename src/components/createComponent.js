import React from "react";
import "../css/createPost.css";
import { Button } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const CreatePostComponent = () => {
  return (
    <div className="post">
      <form action="#" className="form-newtopic" method="post">
        <div className="topwrap">
          <div className="user-info left">
            <div className="avatar">
              <img
                src="http://forum.azyrusthemes.com/images/avatar.jpg"
                alt="avatar"
              ></img>
            </div>
          </div>
          <div className="post-text left">
            <ButtonToolbar className="btn-toolbar home-toolbar">
              <DropdownButton variant="secondary" title={"Select Category"}>
                <DropdownItem eventKey="1">Category 1</DropdownItem>
                <DropdownItem eventKey="2">Category 2</DropdownItem>
                <DropdownItem eventKey="3">Category 3</DropdownItem>
              </DropdownButton>
            </ButtonToolbar>

            <div className="topic-input">
              <input
                type="text"
                placeholder="Enter Topic Title"
                className="form-control"
              />
            </div>

            <div>
              <textarea
                name="desc"
                id="desc"
                placeholder="Description"
                className="form-control"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="post-info-bot">
          <div className="right postreply">
            <div className="left">
              <Button type="submit" className="post-button">
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostComponent;
