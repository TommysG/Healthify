import React from "react";
import "../css/sideblock.css";


const SideBlock = (props) => {
  return (
    <div className="side-block">
      <h3>Categories</h3>
      <div className="line"></div>
      <div className="categories">
        <ul className="list">
          <li>
            <a href="#index" onClick={props.categoryClick}>Men's health</a>
            <span className="badge pull-right">11</span>
          </li>
          <li>
            <a href="#index" onClick={props.categoryClick}>Women's health</a>
            <span className="badge pull-right">15</span>
          </li>
          <li>
            <a href="#index" onClick={props.categoryClick}>Child's health</a>
            <span className="badge pull-right">20</span>
          </li>
          <li>
            <a href="#index" onClick={props.categoryClick}>General</a>
            <span className="badge pull-right">32</span>
          </li>
          <li>
            <a href="#index" onClick={props.categoryClick}>Mental health</a>
            <span className="badge pull-right">9</span>
          </li>
          <li>
            <a href="#index" onClick={props.categoryClick}>Medicines</a>
            <span className="badge pull-right">22</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBlock;
