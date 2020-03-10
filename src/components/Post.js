import React from "react";
import "../css/post.css";

const Post = ({ id, topic, category, user, replies, date }) => {
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
            <a href="/viewpost">10 Kids Unaware of Their Halloween Costume</a>
          </h2>
          <p>
            It's one thing to subject yourself to a Halloween costume mishap
            because, hey, that's your prerogative.
          </p>
        </div>
      </div>
      <div className="post-info left">
        <div className="empty"></div>
        <div className="replies">
          <i className="fas fa-reply"></i>
          1.052
        </div>
        <div className="time">
          <i className="far fa-clock"></i>
          7h
        </div>
      </div>
    </div>
  );
};

export default Post;
