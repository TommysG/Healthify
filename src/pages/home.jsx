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

export class home extends Component {
  state = {
    sideDrawerOpen: false,
    items: [],
    isLoaded: false,
    error: null,
    currentPage: 1,
    postsPerPage: 5,
    postUpvotes: 0
  };

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
    fetch("http://localhost:3100/api/posts", {
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      // "body": JSON.stringify({
      //   name: this.state.name,
      //   notes: this.state.notes
      // })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({
        isLoaded: true,
        items: response
      });
    })
    .catch(err => {
      console.log(err);
      this.setState({
        isLoaded: true,
        error: err
      })
    });
  }

  componentDidMount(){
    this.showPosts()
  }

  //check if votes are updated
  //and updates the posts component
  componentDidUpdate(prevProps, prevState){
    //check if number of upvotes changed
    if (prevState.postUpvotes !== this.state.postUpvotes) {
      console.log("upvotes before: " + prevState.postUpvotes)
      console.log("upvotes now: " + this.state.postUpvotes)
      this.showPosts() // fetching again all the posts
    }
  }

  //handles upvote on posts
   handleUpvote = (e) => {
     console.log(e.target.id)
    fetch("http://localhost:3100/api/upvotePost", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "user_id": "user2@gmail.com",
        "post_id": e.target.id 
      })
    })
    .then(response => {
      console.log(response)
      this.setState({postUpvotes: this.state.postUpvotes + 1})
    })
    .catch(err => {
      console.log(err);
    });
  }

  //handle click on categories
  categoryClick = (event) =>{
    console.log(event.target.innerText)
  }

  render() {
    let backdrop;
    const {isLoaded, error, items } = this.state;
    const {currentPage, postsPerPage} = this.state;
    
     // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber})

    //handles responsive sideDrawer
    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }

    return (
      <Container className="home" fluid={true}>
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}

        <Container className="post-container">
          <Row>
            <Col lg={8} md={8}>
              <Row className="header-row">
                <ButtonToolbar className="btn-toolbar home-toolbar">
                  <DropdownButton variant="secondary" title={"Sort By"}>
                    <DropdownItem eventKey="1">Recent</DropdownItem>
                    <DropdownItem eventKey="2">Most Viewed</DropdownItem>
                    <DropdownItem eventKey="3">Most Liked</DropdownItem>
                  </DropdownButton>
                    <Button variant="secondary" className="createBtn" href="/createPost">
                      New Topic
                    </Button>
                </ButtonToolbar>
              </Row>
              <Posts posts={currentPosts} loading={isLoaded} error={error} handleUpvote={this.handleUpvote}></Posts>
              <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}></Pagination>
            </Col>
            <Col lg={4} md={4}>
              <SideBlock categoryClick={this.categoryClick}></SideBlock>
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
