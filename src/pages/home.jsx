import React, { Component } from "react";

import "../css/home.css";
import SideBlock from "../components/SideBlock";
import HomeNav from "../components/HomeNav";
import BackdropHome from "../components/Backdrop/BackdropHome";
import SideDrawerHome from "../components/SideDrawer/SideDrawerHome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { Poll } from "../components/Poll";
import Footer from "../components/Footer";
import { Posts } from "../components/Posts";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sortOptions = ["Most recent", "Most liked", "Most replied"];

export class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
      user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : [],
      items: [],
      allItems: [],
      userPostsVoted: [],
      selectedCategory: sessionStorage.getItem("selectedCategory")
        ? sessionStorage.getItem("selectedCategory")
        : "All",
      isLoaded: false,
      error: null,
      currentPage: sessionStorage.getItem("currentPage")
        ? sessionStorage.getItem("currentPage")
        : 1,
      postsPerPage: 5,
      postUpvotes: 0,
      sortBy: sortOptions[0],
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  //shows posts
  showPosts = () => {
    let url1 = "http://localhost:3100/api/posts";
    let url2 =
      "http://localhost:3100/api/userPostsVotes/" + this.state.user.email;

    Promise.all([fetch(url1), fetch(url2)])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        console.log(data1);
        this.setState({
          items: this.sortPosts(data1, this.state.sortBy),
          allItems: this.sortPosts(data1, this.state.sortBy),
          userPostsVoted: data2,
        });
        setTimeout(() => {
          this.setState({ isLoaded: true });
        }, 200);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoaded: true,
          error: err,
        });
      });
  };

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

  componentDidMount() {
    if (this.props.location.state) {
      console.log("redirected from somewhere");
      if (this.props.location.state.from === "createpost") {
        console.log("redirected from createpost");
        this.notify();
        this.props.history.replace({ pathname: "/home", from: "home" });
      }
    }

    if (this.state.selectedCategory === "All") {
      this.showPosts();
    } else {
      this.loadPostPerCategory(this.categoryCode(this.state.selectedCategory));
    }
  }

  //check if votes are updated
  //and updates the posts component
  componentDidUpdate(prevProps, prevState) {
    //check if number of upvotes changed
    if (prevState.postUpvotes !== this.state.postUpvotes) {
      console.log("upvotes before: " + prevState.postUpvotes);
      console.log("upvotes now: " + this.state.postUpvotes);
      //this.showPosts(); // fetching again all the posts
      const catCode = this.categoryCode(this.state.selectedCategory);
      catCode !== -1 ? this.loadPostPerCategory(catCode) : this.showPosts();
    }
  }

  categoryCode = (category) => {
    switch (category) {
      case "All":
        return -1;
      case "Men's health":
        return 0;
      case "Women's health":
        return 1;
      case "Child's health":
        return 2;
      case "General":
        return 3;
      case "Mental health":
        return 4;
      case "Medicines":
        return 5;
      default:
        return false;
    }
  };

  //handles upvote on posts
  handleUpvote = (e) => {
    console.log("upvoting as " + this.state.user.email);
    console.log(e.target.id);
    fetch("http://localhost:3100/api/upvotePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.email,
        post_id: e.target.id,
      }),
    })
      .then((response) => {
        console.log(response);
        this.setState({ postUpvotes: this.state.postUpvotes + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handle click on categories
  categoryClick = (event) => {
    console.log(event.target.id);

    let categoryName = event.target.innerText;
    let postsPerCat = [];

    this.setState({ currentPage: 1, selectedCategory: categoryName });
    sessionStorage.setItem("currentPage", 1);
    sessionStorage.setItem("selectedCategory", categoryName);

    if (categoryName === "All") {
      this.showPosts();
    } else {
      this.state.allItems.filter((item) => {
        if (item.category === categoryName) {
          console.log(item.category);
          postsPerCat.push(item);
        }
        return null;
      });
      this.setState({
        items: this.sortPosts(postsPerCat, this.state.sortBy),
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  loadPostPerCategory = (categoryCode) => {
    let url1 = "http://localhost:3100/api/postsPerCategory/" + categoryCode;
    let url2 =
      "http://localhost:3100/api/userPostsVotes/" + this.state.user.email;
    let url3 = "http://localhost:3100/api/posts";

    Promise.all([fetch(url1), fetch(url2), fetch(url3)])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) => {
        console.log(data1);
        this.setState({
          items: this.sortPosts(data1, this.state.sortBy),
          userPostsVoted: data2,
          allItems: this.sortPosts(data3, this.state.sortBy),
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoaded: true,
          error: err,
        });
      });
  };

  handleSort = (eventKey, event) => {
    console.log(sortOptions[eventKey]);
    this.setState({ sortBy: sortOptions[eventKey] });
    this.sortPosts(this.state.items, sortOptions[eventKey]);
  };

  sortPosts = (items, sortBy) => {
    if (sortBy === "Most liked") {
      items.sort((a, b) => (a.totalVotes < b.totalVotes ? 1 : -1));
    } else if (sortBy === "Most replied") {
      items.sort((a, b) => (a.repliesNum < b.repliesNum ? 1 : -1));
    } else {
      items.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    }
    this.setState({ items: items });
    return items;
  };

  render() {
    let backdrop;
    const { isLoaded, error, items, userPostsVoted } = this.state;
    const { currentPage, postsPerPage } = this.state;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
      sessionStorage.setItem("currentPage", pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    //handles responsive sideDrawer
    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }

    return (
      <Container className="home" fluid={true}>
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="post-container">
          <Row>
            <Col lg={8} md={8}>
              <Row className="header-row">
                <ButtonToolbar className="btn-toolbar home-toolbar">
                  <DropdownButton
                    variant="secondary"
                    title={this.state.sortBy}
                    onSelect={this.handleSort.bind(this)}
                  >
                    <DropdownItem eventKey="0">Most recent</DropdownItem>
                    <DropdownItem eventKey="1">Most liked</DropdownItem>
                    <DropdownItem eventKey="2">Most replied</DropdownItem>
                  </DropdownButton>
                  <Link to="/home/createpost">
                    <Button variant="secondary" className="createBtn">
                      New Topic
                    </Button>
                  </Link>
                </ButtonToolbar>
              </Row>
              <Posts
                posts={currentPosts}
                postsVoted={userPostsVoted}
                loading={isLoaded}
                error={error}
                handleUpvote={this.handleUpvote}
              ></Posts>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={items.length}
                paginate={paginate}
                select={this.state.currentPage}
              ></Pagination>
            </Col>
            <Col lg={4} md={4}>
              <SideBlock
                selected={this.state.selectedCategory}
                categoryClick={this.categoryClick}
              ></SideBlock>
              <Poll></Poll>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default home;
