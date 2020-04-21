import React from "react";
import "../css/postView.css";

const PostInfo = ({ title, date, content, style }) => {
  return (
    <div className="postInfo">
      <div className="postHeader">
        <div className="postTitle">
          <h3>{title}</h3>
        </div>
        <div className="postDate">
          <h5>{date}</h5>
        </div>
      </div>
      <div className="postContent">
        <div className="postBody">
          <p>{content}</p>
        </div>
        <div className="likebar">
          <p>
            (1)
            <a href="#heart">
              <i className="fa fa-heart heart-icon"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
