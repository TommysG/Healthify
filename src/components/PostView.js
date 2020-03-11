import React from "react";
import "../css/postView.css";
import UserInfo from "../components/UserInfo";

const PostView = ({ title, date, content }) => {
  return (
    <div className="postContainer">
      <UserInfo />
      <div className="postInfo">
        <div className="postHeader">
          <div className="postTitle">
            <h3>{title}</h3>
          </div>
          <div className="postDate">
            <h5>{date}</h5>
          </div>
        </div>
        <div className="postBody">
          <p>{content}</p>
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
    </div>
  );
};
export default PostView;
