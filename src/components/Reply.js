import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../css/reply.css";

const Reply = () => {
  return (
    <div className="main">
      <div className="replier">
        <img
          src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/A.svg"
          alt="Avatar"
          style={{
            position: "relative",
            width: "50%",
            height: "50%",
            marginLeft: "25%",
            marginTop: "20%"
          }}
        />
        <h4 style={{ width: "100%", textAlign: "center" }}>YOU</h4>
      </div>
      <div className="replyBody">
        <CKEditor editor={ClassicEditor} config="config.height = " />
      </div>
    </div>
  );
};
export default Reply;
