import React from "react";
import "../css/card.css";

export const CardNews = ({ className, img, category, title }) => {
  return (
    <div className="single-latest-post row align-items-center">
      <div className="col-lg-5 ">
        <div className="feature-img relative">
          <div className="overlay overlay-bg"></div>
          <img className="img-fluid" src={img} alt="" />
        </div>
        <ul className="tags">
          <li>{category}</li>
        </ul>
      </div>
      <div className="col-lg-7 ">
        <h4>{title}</h4>
        <ul className="meta">
          <li>Tommys Gian</li>
          <li>03 April, 2019</li>
          <li>06 Comments</li>
        </ul>
        <p className="excert">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  );
};
