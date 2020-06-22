import React from "react";

import "../css/reply.css";
import { Button } from "react-bootstrap";

const Reply = (props) => {
  if (!props.isLoaded) {
    return <div></div>;
  }

  return (
    <div className="post">
      <form action="#" className="form-reply" method="post">
        <div className="topwrap">
          <div className="user-info left">
            <div className="avatar">
              <img src={props.avatar} alt="avatar"></img>
            </div>
          </div>
          <div className="post-text left">
            <div className="textwraper">
              <div className="postreply">Post a Reply</div>
              <textarea
                name={props.name}
                id="reply"
                placeholder="Type your message here"
                value={props.val}
                onChange={props.replyChange}
              ></textarea>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="post-info-bot">
          <div className="right post-reply">
            <div className="left">
              <Button
                variant="secondary"
                className="reply-button"
                onClick={props.replyClick}
              >
                Reply
              </Button>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
        </div>
      </form>
    </div>
  );
};
export default Reply;
