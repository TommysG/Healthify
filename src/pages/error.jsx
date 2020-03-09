import React, { Component } from "react";

export class error extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <h1
          style={{
            height: "90%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#707070"
          }}
        >
          Error 404 page not found
        </h1>
      </div>
    );
  }
}

export default error;
