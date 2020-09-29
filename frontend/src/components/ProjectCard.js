import React from "react";

function ProjectCard(props) {
  const title = props.title;
  const video = props.video;
  const description = props.description;
  const link = props.link;
  return (
    <div className="project-card">
      <a className="project-video-link-container" href={link} title={title} target="_blank"rel="noopener noreferrer">
        <img className="project-video" src={require(`../projects/${video}`)} alt={video} />
      </a>
      <div className="project-details">
        <p className="project-title">
          <a className="project-title-link hover-item" href={link} title={title} target="_blank"rel="noopener noreferrer">{title}</a>
        </p>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;