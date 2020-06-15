import React from "react";
import "../css/post.css";

const Post = ({
  id,
  title,
  body,
  user,
  replies,
  upvotes,
  time,
  handleUpvote,
  postsVoted,
}) => {
  let postVoted = `fas fa-heart`;

  postsVoted.map((post) => {
    if (post.post_id === id) {
      if (post.vote === 1) {
        postVoted = `fas fa-heart tapped`;
      } else if (post.vote === -1) {
        postVoted = `fas fa-heart-broken`;
      } else {
        postVoted = `fas fa-heart`;
      }
    }
    return null;
  });

  return (
    <div className="post">
      <div className="wrapper left">
        <div className="user-info left">
          <div className="avatar">
            <img src="/images/avatar.jpg" alt="avatar"></img>
          </div>
        </div>
        <div className="post-text left">
          <h2>
            <div className="user-name">Posted by: {user}</div>
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
        <div className="likes">
          <i className={postVoted} id={id} onClick={handleUpvote}></i>
          {upvotes}
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
