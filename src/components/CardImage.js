import React from "react";
import "../css/card.css";

export const CardImage = ({ className, img, category, title }) => {
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
        <h4>{title}</h4>
        <ul className="meta">
          <li>Tommys Gian</li>
          <li>03 April, 2020</li>
        </ul>
      </div>
    </div>
  );
};
