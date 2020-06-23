import React from "react";
import NavButton from "./NavButton";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  select,
  perPageHandle,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="breadcrumb">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavButton
              number={number}
              onClick={() => paginate(number)}
              selected={select}
            ></NavButton>
          </li>
        ))}
        <div className="dropdown">
          <button className="dropbtn">
            Replies
            <i className="fa fa-caret-down" style={{ marginLeft: "10px" }}></i>
          </button>
          <div className="dropdown-content">
            <span onClick={() => perPageHandle(5)}>5</span>
            <span onClick={() => perPageHandle(10)}>10</span>
            <span onClick={() => perPageHandle(15)}>15</span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Pagination;
