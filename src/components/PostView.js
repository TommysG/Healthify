import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/postView.css";
import { Base64 } from "js-base64";

const PostView = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem(Base64.encode("user")));

  let postStyle = `post + ${props.style}`;

  let visible = ``;
  if (Base64.decode(user.e) !== props.user) {
    visible = `invisible`;
  }

  function dialog() {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="close-Button" closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={props.deletePost}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className={postStyle}>
      <div className="towrap">
        <div className="user-info left">
          <div className="avatar">
            <img src={props.userAvatar} alt="avatar"></img>
          </div>
        </div>
        <div className="post-text left">
          <div className="user-name">Posted by: {props.user}</div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="post-info-bot">
        <div className="likeblock left">
          <span className="up" onClick={props.upvoteClick}>
            <i className={`fa fa-thumbs-o-up ` + props.postLiked}></i>
            {props.upvotes}
          </span>
          <span className="down" onClick={props.downvoteClick}>
            <i className={`fa fa-thumbs-o-down ` + props.postDisliked}></i>
            {props.downvotes}
          </span>
        </div>

        <div className="posted left">
          <i className="fa fa-clock-o"></i> {props.date}
        </div>

        <div className={"delete-post " + visible}>
          <i className="fa fa-trash" onClick={handleShow}></i>
        </div>

        <div className="clearfix"></div>
      </div>
      {dialog()}
    </div>
  );
};
export default PostView;
