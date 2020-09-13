import React, { useContext, useEffect } from "react";
import AboutContent from "./AboutContent";
import ProjectsContent from "./ProjectsContent";
import { ContentStateContext } from "../contexts/ContentStateContext.js"

function Content() {
  const { contentState } = useContext(ContentStateContext);

  useEffect(() => {

  }, [contentState]);

  if (contentState === "nav-about") {
    return (
      <div className="content">
        <AboutContent />
      </div>
    );
  }
  if (contentState === "nav-projects") {
    return (
      <div className="content">
        <ProjectsContent />
      </div>
    );
  }
  return (
    <div className="content"></div>
  );
}

export default Content;