import React from "react";
import "../css/categories.css";

const Category = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div className="categories">
        <a href="#cat">Men's health</a>
        <a href="#cat">Womens's health</a>
        <a href="#cat">Child's health</a>
        <a href="#cat">General</a>
        <a href="#cat">Medicines</a>
        <a href="#cat">Mental health</a>
      </div>
    </div>
  );
};

export default Category;
