import React, { useContext } from "react";
import NavItem from "./NavItem.js";

function Navigation() {
  return (
    <div className="navigation">
      {/* <div id="nav-about" className="nav-item" onClick={navClick}>1. About</div> */}
      {/* <div id="nav-projects" className="nav-item" onClick={navClick}>2. Projects</div> */}
      <NavItem id="nav-about">1. About</NavItem>
      <NavItem id="nav-projects">2. Projects</NavItem>
    </div>
  );
}

export default Navigation;