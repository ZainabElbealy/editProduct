import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const SideBar = () => {
  return (
    <div>
      <Nav.Link as={NavLink} to="/products">
        <h1 className="fs-2">Products</h1>
      </Nav.Link>
    </div>
  );
};

export default SideBar;
