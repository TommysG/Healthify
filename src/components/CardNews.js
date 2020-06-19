import React from "react";
import "../css/card.css";

export const CardNews = ({ className, img, category, title, body, date }) => {
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
          <li>Healthify Team</li>
          <li>{date}</li>
        </ul>
        <p className="excert">{body}</p>
      </div>
    </div>
  );
};
