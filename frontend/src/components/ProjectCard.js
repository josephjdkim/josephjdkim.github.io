import React from "react";

function ProjectCard(props) {
  const title = props.title;
  const video = props.video;
  const description = props.description;
  return (
    <div className="project-card">
      <img className="project-video" src={require(`../projects/${video}`)} alt={video} />
      <div className="project-details">
        <p className="project-title">{title}</p>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;