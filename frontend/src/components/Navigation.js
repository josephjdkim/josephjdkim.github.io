import React, { useContext } from "react";
import { ContentStateContext } from "../contexts/ContentStateContext";

function Navigation() {
  const { contentState, setContentState } = useContext(ContentStateContext);

  function navClick(e) {
    if (contentState !== e.target.className) {
      setContentState(e.target.className);
    } else {
      setContentState(null);
    }
  }

  return (
    <div className="navigation">
      <div className="nav-about" onClick={navClick}>1. About</div>
      <div className="nav-projects" onClick={navClick}>2. Projects</div>
    </div>
  );
}

export default Navigation;