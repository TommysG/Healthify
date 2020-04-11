import React from "react";
import "../css/post.css";

const Post = ({ id, title, body, user, replies, time }) => {
  return (
    <div className="post">
      <div className="wrapper left">
        <div className="user-info left">
          <div className="avatar">
            <img
              src="http://forum.azyrusthemes.com/images/avatar.jpg"
              alt="avatar"
            ></img>
            <div className="info left">
              <span className="vote"></span>
              <span className="votes-number">1000</span>
              <span className="vote down-vote"></span>
            </div>
          </div>
        </div>
        <div className="post-text left">
          <h2>
            <p className="title">{title}</p>
          </h2>
          <p className="body">{body}</p>
        </div>
      </div>
      <div className="post-info left">
        <div className="empty">
          <div className="commentbg">
            {replies}
            <div className="mark"></div>
          </div>
        </div>
        <div className="replies">
          <i className="fas fa-heart"></i>
          {replies}
        </div>
        <div className="time">
          <i className="far fa-clock"></i>
          {time}
        </div>
      </div>
    </div>
  );
};

export default Post;
