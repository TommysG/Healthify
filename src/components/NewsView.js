import React from "react";
import "../css/card.css";

export const NewsView = ({ title, category, image, content }) => {
	return (
		<div className="news-view">
			<div className="news-image">
				<div className="feature-image relative">
					<ul className="tags">
						<li className="category-top">{category}</li>
					</ul>
					<div className="overlay overlay-bg"></div>
					<img className="img-fluid img-view" alt="prop" src={image}></img>
				</div>
			</div>
			<div className="news-title">
				<h1>{title}</h1>
			</div>
			<div className="news-body">
				<p>{content}</p>
			</div>
			<div className="news-details top-post-details">
				<ul className="meta">
					<li>Tommys Gian</li>
					<li>03 April, 2018</li>
				</ul>
			</div>
		</div>
	);
};
