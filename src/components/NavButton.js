import React from "react";
import Button from "react-bootstrap/Button";

const NavButton = ({ number }) => {
  return (
    <div>
      <Button variant="secondary" className="page-button">
        {number}
      </Button>
    </div>
  );
};

export default NavButton;
