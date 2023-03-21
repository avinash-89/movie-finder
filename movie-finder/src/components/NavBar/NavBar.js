import React from "react";
import "./NavBar.css";

const NavBar = ({brandName}) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
    <a className="navbar-brand" href="#">{brandName}</a>
  </nav>
  );
};

export default NavBar;
