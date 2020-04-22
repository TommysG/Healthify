import React from "react";
import "../css/postView.css";

const PostView = ({ id, title, date, content, style }) => {
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
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="post-info-bot">
        <div className="likeblock left">
          <a href="#index" className="up">
            <i className="fa fa-thumbs-o-up"></i>25
          </a>
          <a href="#index" className="down">
            <i className="fa fa-thumbs-o-down"></i>3
          </a>
        </div>

        <div className="prev left">
          <a href="#index">
            <i className="fa fa-reply"></i>
          </a>
        </div>

        <div className="posted left">
          <i className="fa fa-clock-o"></i> {date}
        </div>

        <div className="next right">
          <a href="#index">
            <i className="fa fa-share"></i>
          </a>

          <a href="#index">
            <i className="fa fa-flag"></i>
          </a>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
export default PostView;
