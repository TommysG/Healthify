import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

    // GET
    // fetch("http://localhost:3100/api/user/kgiari@gmail.com", {
    //   "method": "GET",
    //   "headers": {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   // "body": JSON.stringify({
    //   //   name: this.state.name,
    //   //   notes: this.state.notes
    //   // })
    // })
    // .then(response => response.json())
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    // POST
    // fetch("http://localhost:3100/api/poll", {
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   "body": JSON.stringify({
    //       "mail":"kgiari@gmail.com",
    //       "poll":"What is your favourite color?",
    //       "answers":["Blue","Red","Green"]
    //   })
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  
    // DELETE
    // fetch("http://localhost:3100/api/poll/15", {
    //   "method": "DELETE",
    //   "headers": {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   }
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    // PUT
    // fetch("http://localhost:3100/api/poll", {
    //   "method": "PUT",
    //   "headers": {
    //     "content-type": "application/json",
    //     "accept": "application/json"
    //   },
    //   "body": JSON.stringify({
    //     "poll_id":14,
    //     "poll":"What is your favourite color??",
    //     "answers":[{
    //       "polls_answers_id":1,
    //       "answer":"Bluer"
    //     }]
    //   })
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.log(err);
    // });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
