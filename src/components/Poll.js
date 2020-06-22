import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { Base64 } from "js-base64";

export class Poll extends Component {
  state = {
    pollQuestion: "",
    pollAnswers: [],
    pollVotes: [],
    pollLoaded: false,
    pollError: null,
    userPollVote: 0,
    userCountVotes: 0,
  };

  componentDidUpdate(prevPros, prevState) {
    if (prevState.userCountVotes !== this.state.userCountVotes) {
      this.loadPoll();
    }
  }

  componentDidMount() {
    this.loadPoll();
  }

  loadPoll = () => {
    const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
    let url1 = "http://localhost:3100/api/pollVotes/8";
    let url2 = "http://localhost:3100/api/poll/8";
    let url3 = "http://localhost:3100/api/userVote";
    Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          username: Base64.decode(user.e),
          poll_id: 8,
        }),
      }),
    ])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) => {
        this.setState({
          pollVotes: data1,
          pollQuestion: data2.poll.poll,
          pollAnswers: data2.poll.answers,
          userPollVote: data3.answer_id,
          pollLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          pollLoaded: true,
          pollError: err,
        });
      });
  };

  userVote = (event) => {
    const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
    console.log("Voted: " + event.target.value);
    fetch("http://localhost:3100/api/pollVote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username: Base64.decode(user.e),
        poll_id: 8,
        polls_answers_id: event.target.value,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 400) {
          this.notifyHasVoted();
        } else {
          this.notifyVoting();
          this.setState({
            userHasVoted: response,
            userCountVotes: this.state.userCountVotes + 1,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  notifyHasVoted = () => {
    toast.error(
      <span>
        <i
          className="fas fa-vote-yea"
          style={{ paddingRight: "20px" }}
          aria-hidden="true"
        ></i>
        You have already vote
      </span>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  notifyVoting = () => {
    toast.success(
      <span>
        <i
          className="fas fa-vote-yea"
          style={{ paddingRight: "20px" }}
          aria-hidden="true"
        ></i>
        Thank you for voting!
      </span>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  calculateBar = (total, vote) => {
    if (total === 0) return 0;
    else {
      let percentage = (vote / total) * 100;
      return percentage;
    }
  };

  voteHandler = () => {};

  render() {
    const {
      pollQuestion,
      pollAnswers,
      pollVotes,
      pollLoaded,
      pollError,
      userPollVote,
    } = this.state;

    let question = "",
      ans1 = "",
      ans2 = "",
      ans3 = "";
    let totalVotes = 0,
      votes1 = 0,
      votes2 = 0,
      votes3 = 0;

    let colorLabel1 = ``,
      colorLabel2 = ``,
      colorLabel3 = ``;

    if (pollError) {
      console.log("ERROR ON GETTING POLL DATA");
    } else if (!pollLoaded) {
      return (
        <div
          style={{
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "100px",
          }}
        >
          <Spinner animation="border" style={{ color: "cornflowerblue" }} />
        </div>
      );
    } else {
      question = pollQuestion;
      ans1 = pollAnswers[0].answer;
      ans2 = pollAnswers[1].answer;
      ans3 = pollAnswers[2].answer;

      votes1 = pollVotes[0].votes;
      votes2 = pollVotes[1].votes;
      votes3 = pollVotes[2].votes;
      totalVotes = pollVotes[0].votes + pollVotes[1].votes + pollVotes[2].votes;

      if (this.calculateBar(totalVotes, votes1) < 30) {
        colorLabel1 = `colorLabel`;
      }
      if (this.calculateBar(totalVotes, votes2) < 30) {
        colorLabel2 = `colorLabel`;
      }
      if (this.calculateBar(totalVotes, votes3) < 30) {
        colorLabel3 = `colorLabel`;
      }
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
                      <ProgressBar
                        now={this.calculateBar(totalVotes, votes1)}
                        id="one"
                      ></ProgressBar>
                      <span className={`label1 ` + colorLabel1}>{ans1}</span>
                    </div>
                  </td>
                  <td className="chbox">
                    <input
                      id="opt1"
                      type="radio"
                      name="opt"
                      checked={userPollVote === 1 ? true : false}
                      value={1}
                      onChange={(event) => this.userVote(event)}
                    />
                    <label htmlFor="opt1"></label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="progress-div">
                      <ProgressBar
                        now={this.calculateBar(totalVotes, votes2)}
                        id="two"
                      ></ProgressBar>
                      <span className={`label2 ` + colorLabel2}>{ans2}</span>
                    </div>
                  </td>
                  <td className="chbox">
                    <input
                      id="opt2"
                      type="radio"
                      name="opt"
                      checked={userPollVote === 2 ? true : false}
                      value={2}
                      onChange={(event) => this.userVote(event)}
                    />
                    <label htmlFor="opt2"></label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="progress-div">
                      <ProgressBar
                        now={this.calculateBar(totalVotes, votes3)}
                        id="three"
                      ></ProgressBar>
                      <span className={`label3 ` + colorLabel3}>{ans3}</span>
                    </div>
                  </td>
                  <td className="chbox">
                    <input
                      id="opt3"
                      type="radio"
                      name="opt"
                      checked={userPollVote === 3 ? true : false}
                      value={3}
                      onChange={(event) => this.userVote(event)}
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
  }
}
