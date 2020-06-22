import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/postView.css";
import { Base64 } from "js-base64";

const ReplyView = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem(Base64.encode("user")));

  let votes = props.votes;
  let replyLiked = ``,
    replyDisliked = ``;
  let fromDoctor = ``;

  let visible = ``;
  if (Base64.decode(user.e) !== props.user) {
    visible = `invisible`;
  }

  if (props.userRole === "doctor") {
    fromDoctor = "isDoctor";
  }

  votes.map((item) => {
    if (props.id === item.reply_id) {
      if (item.vote === 1) {
        replyLiked = `postVote`;
      } else if (item.vote === -1) {
        replyDisliked = `postVote`;
      }
    }
    return null;
  });

  function dialog() {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this reply?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#dc3545", color: "white" }}
            onClick={props.deleteReply}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className={"post " + fromDoctor}>
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
            <i className={`fa fa-thumbs-o-up ` + replyLiked}></i>
            {props.upvotes}
          </span>
          <span className="down" onClick={props.downvoteClick}>
            <i className={`fa fa-thumbs-o-down ` + replyDisliked}></i>
            {props.downvotes}
          </span>
        </div>

        <div className="posted left">
          <i className="fa fa-clock-o"></i> {props.date}
        </div>

        <div className={"delete-reply " + visible}>
          <i className="fa fa-trash" onClick={handleShow}></i>
        </div>

        <div className="clearfix"></div>
      </div>
      {dialog()}
    </div>
  );
};
export default ReplyView;
