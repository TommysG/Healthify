import React from "react";
import "../css/card.css";

export const NewsView = ({ title, category, image, content, date }) => {
  const dateConvertion = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="news-view">
      <div className="news-image">
        <div className="feature-image relative">
          <ul className="tags">
            <li className="category-top">{category}</li>
          </ul>
          <img className="img-fluid img-view" alt="prop" src={image}></img>
        </div>
      </div>
      <div className="news-title">
        <h1>{title}</h1>
      </div>

      <div className="news-body">
        <span style={{ whiteSpace: "pre-line" }}>{content}</span>
      </div>
      <div className="news-details top-post-details view-news-details">
        <ul className="meta">
          <li>Healthify team</li>
          <li>{dateConvertion(date)}</li>
        </ul>
      </div>
    </div>
  );
};
