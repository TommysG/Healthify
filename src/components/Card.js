import React from "react";
import "../css/card.css";

export const Card = ({ className, img, category, title }) => {
  return (
    <div className={`${className}`}>
      <div className="feature-image relative">
        <div className="overlay overlay-bg"></div>
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="top-post-details">
        <ul className="tags">
          <li>{category}</li>
        </ul>
        <a href="#title">
          <h4>{title}</h4>
        </a>
        <ul className="meta">
          <li>Tommys Gian</li>
          <li>03 April, 2018</li>
        </ul>
      </div>
    </div>
  );
};
