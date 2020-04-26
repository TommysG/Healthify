import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Poll = () => {
  return (
    <div className="side-block">
      <h3>Poll of the week</h3>
      <div className="line"></div>
      <div className="block-poll">
        <p>Question?</p>
        <form action="#" method="post" className="form">
          <table className="poll">
            <tbody>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar now="60" label="Choice 1" id="one" />
                  </div>
                </td>
                <td className="chbox">
                  <input id="opt1" type="radio" name="opt" value="1" />
                  <label htmlFor="opt1"></label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar
                      now="80"
                      label="Choice 2"
                      id="two"
                    ></ProgressBar>
                  </div>
                </td>
                <td className="chbox">
                  <input id="opt2" type="radio" name="opt" value="2" />
                  <label htmlFor="opt2"></label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="progress-div">
                    <ProgressBar
                      now="50"
                      label="Choice 3"
                      id="three"
                    ></ProgressBar>
                  </div>
                </td>
                <td className="chbox">
                  <input id="opt3" type="radio" name="opt" value="3" />
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
