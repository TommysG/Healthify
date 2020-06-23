import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

//Handles post's date posted to display properly on screen
const manageDate = (date) => {
  let diff = new Date().getTime() - new Date(date).getTime();
  var seconds = Math.abs(diff) / 1000;

  if (seconds > 60) {
    var minutes = seconds / 60;

    if (minutes > 60) {
      var hours = minutes / 60;

      if (hours > 24) {
        var days = hours / 24;
        return Math.floor(days) + "d";
      }

      return Math.floor(hours) + "h";
    }

    return Math.floor(minutes) + "m";
  }

  return Math.floor(seconds) + "s";
};

export const Posts = ({ posts, postsVoted, loading, error, handleUpvote }) => {
  let postItems;

  //show posts
  if (error) {
    postItems = <div>Error: {error.message}</div>;
  } else if (!loading) {
    postItems = (
      <div
        style={{
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <Spinner
          animation="border"
          style={{ color: "cornflowerblue", width: "70px", height: "70px" }}
        />
      </div>
    );
  } else if (posts.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <span>No posts here.</span>
      </div>
    );
  } else {
    postItems = posts.map((item) => (
      <Post
        key={item.post_id}
        id={item.post_id}
        title={<Link to={`/home/viewpost/${item.post_id}`}>{item.title}</Link>}
        user={item.user_id}
        body={item.body}
        userAvatar={item.avatar}
        userRole={item.role}
        replies={item.repliesNum}
        upvotes={item.totalVotes}
        time={manageDate(item.createdAt)}
        handleUpvote={handleUpvote}
        postsVoted={postsVoted}
      ></Post>
    ));
  }

  return <div>{postItems}</div>;
};
