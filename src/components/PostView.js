import React from "react";
import "../css/postView.css";
import UserInfo from "../components/UserInfo";
import PostInfo from "../components/PostInfo";

const PostView = ({ id, title, date, content }) => {
  return (
    <div className="postContainer">
      <UserInfo />
      <PostInfo id={id} title={title} date={date} content={content} />
    </div>
  );
};
export default PostView;
