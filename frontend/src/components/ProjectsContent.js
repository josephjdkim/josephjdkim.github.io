import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsContent() {
  let projectList = require("../projects/projectList.json").projects;
  // console.log(projectList);
  return (
    <div className="projects-content">
      { Object.keys(projectList).map((k) => {
        console.log(projectList[k]);
        return (
          <ProjectCard title={projectList[k].title} video={projectList[k].video} description={projectList[k].description} />
        )
      })}
      <a className="more-projects" href="https://www.github.com/josephjdkim" title="GitHub @josephjdkim" target="_blank" rel="noopener noreferrer">explore more projects</a>
    </div>
  );
}

export default ProjectsContent;