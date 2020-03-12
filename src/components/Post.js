import React from "react";
import "../css/post.css";

const Post = ({ id, topic, body, user, replies, time }) => {
  return (
    <div className="post">
      <div className="wrapper left">
        <div className="user-info left">
          <div className="avatar">
            <img
              src="http://forum.azyrusthemes.com/images/avatar.jpg"
              alt="avatar"
            ></img>
          </div>
        </div>
        <div className="post-text left">
          <h2>
            <a href={"/viewpost#" + id} className="topic">
              {topic}
            </a>
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
          <i className="fas fa-reply"></i>
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
