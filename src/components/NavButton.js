import React from "react";

const NavButton = ({ number, onClick, selected }) => {
  let style = "";

  if (selected === number) {
    style = "active";
  }

  return (
    <div>
      <button className={`page-button ` + style} onClick={onClick}>
        {number}
      </button>
    </div>
  );
};

export default NavButton;
