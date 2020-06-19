import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const userVote = (event) => {
  console.log("Voted: " + event.target.value);
  fetch("http://localhost:3100/api/pollVote", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      username: "kgiari@gmail.com",
      poll_id: 8,
      polls_answers_id: event.target.value,
    }),
  })
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
};

const calculateBar = (total, vote) => {
  if (total === 0) return 0;
  else {
    let percentage = (vote / total) * 100;
    console.log("Percent: " + percentage);
    return percentage;
  }
};

export const Poll = ({ question, answers, votes, pollLoaded }) => {
  let totalVotes = 0;

  //   votes.map((item) => {
  //     totalVotes += item;
  //     return null;
  //   });
  let ans1 = "",
    ans2 = "",
    ans3 = "";
  if (pollLoaded) {
    ans1 = answers[0].answer;
    ans2 = answers[1].answer;
    ans3 = answers[2].answer;
  }
  return (
    <div className="side-block">
      <h3>Poll of the week</h3>
      <div className="line"></div>
      <div className="block-poll">
        <p>{question}</p>
        <form action="#" method="post" className="form">
          <table className="poll">
            <tbody>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar now={50} label={ans1} id="one" />
                  </div>
                </td>
                <td className="chbox">
                  <input
                    id="opt1"
                    type="radio"
                    name="opt"
                    value="1"
                    onClick={(event) => userVote(event)}
                  />
                  <label htmlFor="opt1"></label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar now={50} label={ans2} id="two"></ProgressBar>
                  </div>
                </td>
                <td className="chbox">
                  <input
                    id="opt2"
                    type="radio"
                    name="opt"
                    value="2"
                    onClick={(event) => userVote(event)}
                  />
                  <label htmlFor="opt2"></label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar now={50} label={ans3} id="three"></ProgressBar>
                  </div>
                </td>
                <td className="chbox">
                  <input
                    id="opt3"
                    type="radio"
                    name="opt"
                    value="3"
                    onClick={(event) => userVote(event)}
                  />
                  <label htmlFor="opt3"></label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
