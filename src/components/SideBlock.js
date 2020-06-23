import React, { Component } from "react";
import "../css/sideblock.css";
import { Redirect } from "react-router-dom";

class SideBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCount: 0,
      postsCount: [],
      redirect: false,
      cat: "",
    };
  }

  componentDidMount() {
    this.loadCategoryPostNumber();
  }

  //loads category posts number
  loadCategoryPostNumber() {
    let url1 = "http://localhost:3100/api/postsCountPerCategory";

    fetch(url1)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          postsCount: response,
          allCount: this.caclAllPosts(response),
        });
      })
      .catch((err) => console.log(err));
  }

  //total posts count
  caclAllPosts = (postsCount) => {
    const all =
      parseInt(postsCount.mensHealthCount) +
      parseInt(postsCount.womensHealthCount) +
      parseInt(postsCount.childsHealthCount) +
      parseInt(postsCount.generalCount) +
      parseInt(postsCount.mentalHealthCount) +
      parseInt(postsCount.medicinesHealthCount);
    return all;
  };

  // renders redirect to home when redirect is set to true
  renderRedirect = () => {
    if (this.state.redirect)
      return (
        // <Redirect
        //   to={{ pathname: "/home", state: { category: this.state.cat } }}
        // ></Redirect>
        <Redirect to="/home"></Redirect>
      );
  };

  //saves selected category to session storage and changes selected category to the clicked one
  click = (event) => {
    sessionStorage.setItem("selectedCategory", event.target.innerText);
    sessionStorage.setItem("currentPage", 1);
    this.setState({ redirect: true, cat: event.target.innerText });
  };

  render() {
    let { postsCount, allCount } = this.state;

    return (
      <div className="side-block">
        <h3>Categories</h3>
        <div className="line"></div>
        <div className="categories">
          <ul className="list">
            {this.renderRedirect()}
            <li>
              <span
                className={this.props.selected === "All" ? `selected` : ``}
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="-1"
              >
                All
              </span>
              <span className={"badge pull-right"}>{allCount}</span>
            </li>
            <li>
              <span
                className={
                  this.props.selected === "Men's health" ? `selected` : ``
                }
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="0"
              >
                Men's health
              </span>
              <span className="badge pull-right">
                {postsCount.mensHealthCount}
              </span>
            </li>
            <li>
              <span
                className={
                  this.props.selected === "Women's health" ? `selected` : ``
                }
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="1"
              >
                Women's health
              </span>
              <span className="badge pull-right">
                {postsCount.womensHealthCount}
              </span>
            </li>
            <li>
              <span
                className={
                  this.props.selected === "Child's health" ? `selected` : ``
                }
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="2"
              >
                Child's health
              </span>
              <span className="badge pull-right">
                {postsCount.childsHealthCount}
              </span>
            </li>
            <li>
              <span
                className={this.props.selected === "General" ? `selected` : ``}
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="3"
              >
                General
              </span>
              <span className="badge pull-right">
                {postsCount.generalCount}
              </span>
            </li>
            <li>
              <span
                className={
                  this.props.selected === "Mental health" ? `selected` : ``
                }
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="4"
              >
                Mental health
              </span>
              <span className="badge pull-right">
                {postsCount.mentalHealthCount}
              </span>
            </li>
            <li>
              <span
                className={
                  this.props.selected === "Medicines" ? `selected` : ``
                }
                onClick={
                  this.props.categoryClick
                    ? this.props.categoryClick
                    : this.click
                }
                id="5"
              >
                Medicines
              </span>
              <span className="badge pull-right">
                {postsCount.medicinesHealthCount}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBlock;
