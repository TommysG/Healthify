import React from "react";

const Post = ({ id, topic, category, user, replies, date }) => {
  return (
    <tr>
      <td id="topic">
        <a href={"#" + id}>{topic}</a>
      </td>
      <td>
        <li>{category}</li>
      </td>
      <td>
        <div>
          <img
            src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/T.svg"
            alt="avatar"
            width="42px"
            height="42px"
          />
          <span style={{ display: "block" }}>{user}</span>
        </div>
      </td>
      <td>{replies}</td>
      <td id="date">{date}</td>
    </tr>
  );
};

export default Post;
