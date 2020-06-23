import React, { Component } from "react";
import "../css/createPost.css";
import { Button } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Redirect } from "react-router-dom";
import { Base64 } from "js-base64";
import { toast } from "react-toastify";

const categories = [
  "Men's health",
  "Women's health",
  "Child's health",
  "General",
  "Mental health",
  "Medicines",
];

class CreatePostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
      category: categories[0],
      redirect: false,
      userAvatar: "",
      avatarLoaded: false,
      titleInput: "",
      BodyInput: "",
    };
  }

  //on component did mount loads user's avatar
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem(Base64.encode("user")));

    fetch("http://localhost:3100/api/user/" + Base64.decode(user.e), {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userAvatar: response.avatar, avatarLoaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //handles category selection
  handleSelect(eventKey, event) {
    console.log(categories[eventKey]);
    this.setState({ category: categories[eventKey] });
  }

  //fix for mysql db
  apostropheFix = (value) => {
    return value.replace(/'/g, "''");
  };

  //set redirect to true
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
    this.notify();
  };

  //notify on successfully post created
  notify = () => {
    toast.info(
      <span>
        <i
          className="fa fa-check"
          style={{ paddingRight: "20px" }}
          aria-hidden="true"
        ></i>
        Post successfully created
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

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  //post request when user taps post
  handleClick = (event) => {
    event.preventDefault();
    const { title, body, category } = this.state;
    const user = JSON.parse(localStorage.getItem(Base64.encode("user")));
    //console.log(user.e);

    if (title && body && category) {
      fetch("http://localhost:3100/api/post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          user_id: Base64.decode(user.e),
          title: this.apostropheFix(title),
          body: this.apostropheFix(body),
          category: this.apostropheFix(category),
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.log("Succesfully Posted");
            this.setRedirect();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("empty fields");
    }
  };

  //handles text change
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "title") {
      if (!event.target.value) {
        this.setState({ titleInput: "Field required." });
      } else if (event.target.value.length < 5) {
        this.setState({
          titleInput: "Title should be at least 5 characters long.",
        });
      } else {
        this.setState({ titleInput: "" });
      }
    } else if (event.target.name === "body") {
      if (!event.target.value) {
        this.setState({ BodyInput: "Field required." });
      } else if (event.target.value.length < 5) {
        this.setState({
          BodyInput: "Body should be at least 5 characters long.",
        });
      } else {
        this.setState({ BodyInput: "" });
      }
    }
  };

  render() {
    const { userAvatar, avatarLoaded } = this.state;

    //renders avatar when is received from db
    const showAvatar = () => {
      if (!avatarLoaded) {
        return <div></div>;
      } else {
        return <img src={userAvatar} alt="avatar"></img>;
      }
    };

    return (
      <div className="post">
        <form action="#" className="form-newtopic" method="post">
          <div className="topwrap">
            <div className="user-info left">
              <div className="avatar">{showAvatar()}</div>
            </div>
            <div className="post-text left">
              <ButtonToolbar className="btn-toolbar home-toolbar">
                <DropdownButton
                  variant="secondary"
                  title={this.state.category}
                  onSelect={this.handleSelect.bind(this)}
                >
                  {categories.map((item, i) => (
                    <DropdownItem
                      className="category-item"
                      key={i}
                      eventKey={i}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownButton>
              </ButtonToolbar>

              <div className="topic-input">
                <input
                  name="title"
                  type="text"
                  placeholder="Enter topic title"
                  className="form-control"
                  onChange={this.handleInputChange}
                  autoComplete="off"
                />
                <span style={{ color: "rgb(255, 53, 71)" }}>
                  {this.state.titleInput}
                </span>
              </div>

              <div>
                <textarea
                  name="body"
                  id="desc"
                  placeholder="Enter some details"
                  className="form-control"
                  onChange={this.handleInputChange}
                ></textarea>
                <span style={{ color: "rgb(255, 53, 71)" }}>
                  {this.state.BodyInput}
                </span>
              </div>
            </div>
          </div>
          <div className="post-info-bot">
            <div className="right postreply">
              <div className="left">
                {this.renderRedirect()}
                <Button className="post-button" onClick={this.handleClick}>
                  Post
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePostComponent;
