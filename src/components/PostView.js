import React from "react";
import "../css/postView.css";


const PostView = (props) => {
  let postStyle = `post + ${props.style}`;

  return (
    <div className={postStyle}>
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
  <div className="user-name">Posted by: {props.user}</div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="post-info-bot">
        <div className="likeblock left">
          <span className="up" onClick={props.upvoteClick}>
            <i className="fa fa-thumbs-o-up" ></i>{props.upvotes}
          </span>
          <span className="down" onClick={props.downvoteClick}>
            <i className="fa fa-thumbs-o-down" ></i>{props.downvotes}
          </span>
        </div>

        <div className="posted left">
          <i className="fa fa-clock-o"></i> {props.date}
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
export default PostView;
