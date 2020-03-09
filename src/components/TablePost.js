import React, { Component } from "react";
import Post from "../components/Post";
import "../css/tablepost.css";

export class TablePost extends Component {
  render() {
    return (
      <div>
        <table id="students">
          <tbody>
            <tr>
              <th>Topic</th>
              <th>Category</th>
              <th>User</th>
              <th>Replies</th>
              <th>Date</th>
            </tr>
            <Post
              id="1"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="2"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
            <Post
              id="3"
              topic="This is a topic"
              category="Category"
              user="Tommys Gian"
              replies="13"
              date="9/3/2020"
            ></Post>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablePost;
