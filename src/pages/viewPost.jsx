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
import Pagination from "../components/Pagination"

export class viewPost extends Component {
  state = {
    sideDrawerOpen: false,
    post: [],
    postReplies: [],
    isLoaded: false,
    error: null,
    replyText: '',
    postVotes: [],
    currentPage: 1,
    postsPerPage: 5
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  manageDate(date){
    let diff =  new Date().getTime() - new Date(date).getTime()
    var seconds = Math.abs(diff) / 1000;

    if(seconds > 60){
      var minutes = seconds/60;

      if(minutes > 60){
        var hours = minutes/60;

        if(hours > 24){
          var days = hours/24;
          return Math.floor(days) + 'd';
        }

        return Math.floor(hours) + 'h';
      }

      return Math.floor(minutes) + 'm';
    }

    return Math.floor(seconds) + 's';
  }

 isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


  componentDidMount(){
    console.log("POST ID IS: " + this.props.match.params.id)
    const url1 = "http://localhost:3100/api/post/" + this.props.match.params.id
    const url2 = "http://localhost:3100/api/postReplies/" + this.props.match.params.id
    
    Promise.all([
      fetch(url1),
      fetch(url2)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            post: data1, 
            postVotes: data1.totalVotes,
            postReplies: data2,
            isLoaded: true
        }))
        .catch(err => {
          console.log(err);
          this.setState({
            isLoaded: true,
            error: err
          })
        });    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.postReplies !== this.state.postReplies) {
      console.log("New post added")
      this.setState({
        replyText: ""
      })
    }

    if (prevState.postVotes !== this.state.postVotes){
      console.log("Post votes changed")
     
    fetch("http://localhost:3100/api/post/" + this.props.match.params.id, {
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
      console.log(response)
      this.setState({post: response})
    })
    .catch(err => {
      console.log(err);
    });
    }
  }

  inputHandleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleReplyClick = (event) => {
    event.preventDefault()
    const url2 = "http://localhost:3100/api/postReplies/" + this.props.match.params.id

    Promise.all([
      fetch("http://localhost:3100/api/reply", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          "user_id": "user2@gmail.com",
          "post_id": this.props.match.params.id,
          "comment": this.state.replyText
        })
      }),
      fetch(url2)
    ])
    .then(([res1, res2]) => Promise.all([res1, res2.json()]))
        .then(([data1, data2]) => this.setState({
            postReplies: data2,
        }))
    .catch(err => {
      console.log(err);
    });
  }

  // upvote = (e, reply_id) => {
  //   const url2 = "http://localhost:3100/api/postReplies/" + this.props.match.params.id
  
  //   fetch("http://localhost:3100/api/upvoteReply", {
  //     "method": "POST",
  //     "headers": {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     },
  //     "body": JSON.stringify({
  //       "user_id": "user2@gmail.com",
  //       "reply_id": reply_id
  //     })
  //   })
  //   .then(response => console.log(response))
  //   .catch(err => {
  //     console.log(err);
  //   });

 // }

 upvotePost = (post) =>{
   fetch("http://localhost:3100/api/upvotePost", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          "user_id": "user2@gmail.com",
          "post_id": post
        })
      })
      .then(response => {this.setState({postVotes: this.state.postVotes + 1})})
      .catch(err => {
        console.log(err);
      });
 }

 downvotePost = (post) =>{
  fetch("http://localhost:3100/api/downvotePost", {
       "method": "POST",
       "headers": {
         "content-type": "application/json",
         "accept": "application/json"
       },
       "body": JSON.stringify({
         "user_id": "user2@gmail.com",
         "post_id": post
       })
     })
     .then(response => {this.setState({postVotes: this.state.postVotes - 1})})
     .catch(err => {
       console.log(err);
     });
  }


  render() {
    let backdrop;
    let post;
    const error = this.state.error
    const isLoaded = this.state.isLoaded
    const mainPost = this.state.post
    const postReplies = this.state.postReplies

    const {currentPage, postsPerPage} = this.state;
    
     // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postReplies.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber})


    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropHome click={this.backdropClickHandler} />;
    }

    if(error){
      post = <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
      post =  <div>Loading...</div>;
    }
    else{
     post = 
        <PostView
          key={mainPost.post_id}
          id={mainPost.post_id}
          user = {mainPost.user_id}
          title={mainPost.title}
          content={mainPost.body}
          date={this.manageDate(mainPost.createdAt)}
          upvotes = {mainPost.totalVotes}
          style={`style`}
          upvoteClick={(e) => this.upvotePost(mainPost.post_id)}
          downvoteClick={(e) => this.downvotePost(mainPost.post_id)}
        ></PostView>
    }

    return (
      <div className="view-container">
        <HomeNav drawerClickHandler={this.drawerToggleClickHandler}></HomeNav>
        <SideDrawerHome show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className="post-container">
          <Row>
            <Col lg={8} md={8}>
              {post}
              <Replies replies={currentPosts} loading={isLoaded} error={error}></Replies>
              <Reply name="replyText" val={this.state.replyText} replyChange={this.inputHandleChange} replyClick={this.handleReplyClick} />
              <Pagination postsPerPage={postsPerPage} totalPosts={postReplies.length} paginate={paginate}></Pagination>
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
