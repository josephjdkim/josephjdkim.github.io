import React, { useContext } from "react";
import { ContentStateContext } from "../contexts/ContentStateContext";

function Navigation() {
  const { contentState, setContentState } = useContext(ContentStateContext);

  function navClick(e) {
    if (contentState !== e.target.id) {
      setContentState(e.target.id);
    } else {
      setContentState(null);
    }
  }

  return (
    <div className="navigation">
      <div id="nav-about" className="nav-item" onClick={navClick}>1. About</div>
      <div id="nav-projects" className="nav-item" onClick={navClick}>2. Projects</div>
    </div>
  );
}

export default Navigation;