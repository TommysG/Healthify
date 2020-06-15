import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import PostView from "../components/PostView";
import SideBlock from "../components/SideBlock";
import { Poll } from "../components/Poll";
import Reply from "../components/Reply";
import Footer from "../components/Footer";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";
import { Container, Row, Col } from "react-bootstrap";
import Replies from "../components/Replies";
import Pagination from "../components/Pagination";
import { Redirect } from "react-router-dom";

export class viewPost extends Component {
  state = {
    sideDrawerOpen: false,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [],
    post: [],
    postReplies: [],
    userPostVotes: [],
    userRepliesVotes: [],
    repliesCount: 0,
    isLoaded: false,
    error: null,
    replyText: "",
    postVotes: 0,
    replyVotes: 0,
    currentPage: 1,
    postsPerPage: 5,
    redirect: false,
    replyChangeText: "",
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  manageDate(date) {
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
  }

  componentDidMount() {
    this.loadPostData();
  }

  loadPostData() {
    console.log("POST ID IS: " + this.props.match.params.id);
    const url1 = "http://localhost:3100/api/post/" + this.props.match.params.id;
    const url2 =
      "http://localhost:3100/api/postReplies/" + this.props.match.params.id;

    const url3 =
      "http://localhost:3100/api/userPostsVotes/" + this.state.user.email;

    const user = this.state.user.email;
    const post_id = this.props.match.params.id;
    const url4 =
      "http://localhost:3100/api/userPostVotes?user_id=" +
      user +
      "&post_id=" +
      post_id;

    Promise.all([fetch(url1), fetch(url2), fetch(url3), fetch(url4)])
      .then(([res1, res2, res3, res4]) =>
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])
      )
      .then(([data1, data2, data3, data4]) =>
        this.setState({
          post: data1,
          postReplies: data2,
          userPostVotes: data3,
          userRepliesVotes: data4,
          isLoaded: true,
        })
      )
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoaded: true,
          error: err,
        });
      });
  }

  loadReplies() {
    const urlReplies =
      "http://localhost:3100/api/postReplies/" + this.props.match.params.id;

    const user = this.state.user.email;
    const post_id = this.props.match.params.id;
    const urlVotes =
      "http://localhost:3100/api/userPostVotes?user_id=" +
      user +
      "&post_id=" +
      post_id;

    Promise.all([fetch(urlReplies), fetch(urlVotes)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        console.log(data2);
        this.setState({ postReplies: data1, userRepliesVotes: data2 });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadPost() {
    let url1 = "http://localhost:3100/api/post/" + this.props.match.params.id;
    let url2 =
      "http://localhost:3100/api/userPostsVotes/" + this.state.user.email;

    Promise.all([fetch(url1), fetch(url2)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        console.log(data1);
        this.setState({ post: data1, userPostVotes: data2 });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.repliesCount !== this.state.repliesCount) {
      if (prevState.repliesCount < this.state.repliesCount) {
        console.log("New post added");
      } else if (prevState.repliesCount > this.state.repliesCount) {
        console.log("Post deleted");
      }
      this.loadReplies();
      this.setState({
        replyText: "",
      });
    }

    if (prevState.postVotes !== this.state.postVotes) {
      console.log("Post votes changed");
      this.loadPost();
    }

    if (prevState.replyVotes !== this.state.replyVotes) {
      console.log("Reply votes changed");
      this.loadReplies();
    }
  }

  inputHandleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleReplyClick = (event) => {
    event.preventDefault();

    fetch("http://localhost:3100/api/reply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        post_id: this.props.match.params.id,
        comment: this.state.replyText,
      }),
    })
      .then((response) =>
        this.setState({
          repliesCount: this.state.repliesCount + 1,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  upvotePost = (post) => {
    fetch("http://localhost:3100/api/upvotePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        post_id: post,
      }),
    })
      .then((response) => {
        this.setState({ postVotes: this.state.postVotes + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  downvotePost = (post) => {
    fetch("http://localhost:3100/api/downvotePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        post_id: post,
      }),
    })
      .then((response) => {
        this.setState({ postVotes: this.state.postVotes - 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  upvoteReply = (e, reply) => {
    console.log(reply);
    fetch("http://localhost:3100/api/upvoteReply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        reply_id: reply,
      }),
    })
      .then((response) => {
        console.log(response);
        this.setState({ replyVotes: this.state.replyVotes + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  downvoteReply = (e, reply) => {
    console.log(reply);
    fetch("http://localhost:3100/api/downvoteReply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        reply_id: reply,
      }),
    })
      .then((response) => {
        console.log(response);
        this.setState({ replyVotes: this.state.replyVotes - 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletePost = (post) => {
    console.log(post);
    const url = "http://localhost:3100/api/post/" + post;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteReply = (e, reply) => {
    console.log(reply);
    const url = "http://localhost:3100/api/reply/" + reply;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ repliesCount: this.state.repliesCount - 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editReply = (e, reply) => {
    console.log(reply);
  };

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/home"></Redirect>;
    }
    return null;
  }

  render() {
    let backdrop;
    let post;
    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    const mainPost = this.state.post;
    const postReplies = this.state.postReplies;
    const userPostVotes = this.state.userPostVotes;
    const userRepliesVotes = this.state.userRepliesVotes;

    const { currentPage, postsPerPage } = this.state;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = !postReplies.error
      ? postReplies.slice(indexOfFirstPost, indexOfLastPost)
      : [];

    //change page
    const paginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
      window.scrollTo({ top: 350, behavior: "smooth" });
    };

    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }

    let postLiked = ``,
      postDisliked = ``;
    userPostVotes.map((post) => {
      if (post.post_id === mainPost.post_id) {
        if (post.vote === 1) {
          postLiked = `postVote`;
        } else if (post.vote === -1) {
          postDisliked = `postVote`;
        }
      }
      return null;
    });

    if (error) {
      post = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      post = <div>Loading...</div>;
    } else {
      post = (
        <PostView
          key={mainPost.post_id}
          id={mainPost.post_id}
          user={mainPost.user_id}
          title={mainPost.title}
          content={mainPost.body}
          date={this.manageDate(mainPost.createdAt)}
          upvotes={mainPost.totalVotes}
          style={`style`}
          postLiked={postLiked}
          postDisliked={postDisliked}
          upvoteClick={(e) => this.upvotePost(mainPost.post_id)}
          downvoteClick={(e) => this.downvotePost(mainPost.post_id)}
          deletePost={(e) => this.deletePost(mainPost.post_id)}
        ></PostView>
      );
    }

    return (
      <div className="view-container">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="post-container">
          {this.renderRedirect()}
          <Row>
            <Col lg={8} md={8}>
              {post}
              <Replies
                replies={currentPosts}
                loading={isLoaded}
                error={error}
                upvote={this.upvoteReply}
                downvote={this.downvoteReply}
                votes={userRepliesVotes}
                deleteReply={this.deleteReply}
                editReply={this.editReply}
              ></Replies>
              <Reply
                name="replyText"
                val={this.state.replyText}
                replyChange={this.inputHandleChange}
                replyClick={this.handleReplyClick}
              />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={postReplies.length}
                paginate={paginate}
                select={this.state.currentPage}
              ></Pagination>
            </Col>
            <Col lg={4} md={4}>
              <SideBlock></SideBlock>
              <Poll />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default viewPost;
