import React, { Component } from "react";
import "../css/createPost.css";
import { Button } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Redirect } from "react-router-dom";

const categories = ["Men's health", "Women's health", "Child's health", "General", "Mental health", "Medicines"];

class CreatePostComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: null,
      body: null,
      category: categories[0], 
      redirect: false,
    }
  }

  handleSelect(eventKey, event) {
    console.log(categories[eventKey])
    this.setState({ category: categories[eventKey]});
  }

  apostropheFix = (value) =>{
   return value.replace(/'/g, "''");
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }
  
  handleClick = (event) =>{
    event.preventDefault()
    const {title,body,category} = this.state;
    
    fetch("http://localhost:3100/api/post", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
          "user_id": "user2@gmail.com",
          "title": title,
          "body": body,
          "category": this.apostropheFix(category)
      })
    })
    .then(response => {
      console.log(response)  
      if(response.status === 201){
        console.log("Succesfully Posted")
        this.setRedirect()
      }
    })
    .catch(err => {
      console.log(err);
    });
  
  }

  handleInputChange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className="post">
        <form action="#" className="form-newtopic" method="post">
          <div className="topwrap">
            <div className="user-info left">
              <div className="avatar">
                <img
                  src="http://forum.azyrusthemes.com/images/avatar.jpg"
                  alt="avatar"
                ></img>
              </div>
            </div>
            <div className="post-text left">
              <ButtonToolbar className="btn-toolbar home-toolbar">
                <DropdownButton variant="secondary" title={this.state.category} onSelect={this.handleSelect.bind(this)}>
                  {
                    categories.map( (item, i) => 
                      <DropdownItem className="category-item" key={i} eventKey={i}>{item}</DropdownItem>
                    )
                  }
                </DropdownButton>
              </ButtonToolbar>
  
              <div className="topic-input">
                <input
                  name="title"
                  type="text"
                  placeholder="Enter Topic Title"
                  className="form-control"
                  onChange={this.handleInputChange}
                />
              </div>
  
              <div>
                <textarea
                  name="body"
                  id="desc"
                  placeholder="Description"
                  className="form-control"
                  onChange={this.handleInputChange}
                ></textarea>
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
  
};

export default CreatePostComponent;
