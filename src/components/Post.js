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
  userAvatar,
  userRole,
}) => {
  let postVoted = `fas fa-heart`;
  let postUserRole = ``;

  if (userRole === "doctor") {
    postUserRole = "isDoctor";
  }

  postsVoted.map((post) => {
    if (post.post_id === id) {
      if (post.vote === 1) {
        postVoted = `fas fa-heart tapped`;
      } else if (post.vote === -1) {
        postVoted = `fas fa-heart-broken tapped`;
      } else {
        postVoted = `fas fa-heart`;
      }
    }
    return null;
  });

  return (
    <div className={"post " + postUserRole}>
      <div className="wrapper left">
        <div className="user-info left">
          <div className="avatar">
            <img src={userAvatar} alt="avatar"></img>
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
