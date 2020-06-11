import React from "react";
import Button from "react-bootstrap/Button";

const NavButton = ({ number, onClick }) => {
  return (
    <div>
      <Button variant="secondary" className="page-button" onClick={onClick}>
        {number}
      </Button>
    </div>
  );
};

export default NavButton;
