import React from "react";
import "../css/postView.css";
import UserInfo from "../components/UserInfo";
import PostInfo from "../components/PostInfo";

const PostView = ({ id, title, date, content, style }) => {
  return (
    <div className={`postContainer + ${style}`}>
      <UserInfo />
      <PostInfo
        id={id}
        title={title}
        date={date}
        content={content}
        style={style}
      />
    </div>
  );
};
export default PostView;
