import React from "react";
import "../css/postView.css";

const ReplyView = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  let votes = props.votes;
  let replyLiked = ``,
    replyDisliked = ``;

  let visible = ``;
  if (user.email !== props.user) {
    visible = `invisible`;
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

  return (
    <div className="post">
      <div className="towrap">
        <div className="user-info left">
          <div className="avatar">
            <img
              src="http://forum.azyrusthemes.com/images/avatar.jpg"
              alt="avatar"
            ></img>
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
          <i className="fa fa-trash" onClick={props.deleteReply}></i>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
export default ReplyView;
