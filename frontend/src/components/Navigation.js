import React, { useContext } from "react";
import NavItem from "./NavItem.js";

function Navigation() {
  return (
    <div className="navigation">
      {/* <div id="nav-about" className="nav-item" onClick={navClick}>1. About</div> */}
      {/* <div id="nav-projects" className="nav-item" onClick={navClick}>2. Projects</div> */}
      <ol>
        <li><NavItem id="nav-about">ABOUT</NavItem></li>
        <li><NavItem id="nav-projects">PROJECTS</NavItem></li>
      </ol>
    </div>
  );
}

export default Navigation;