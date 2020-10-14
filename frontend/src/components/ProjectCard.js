import React from "react";

function ProjectCard(props) {
  const title = props.title;
  const video = props.video;
  const description = props.description;
  const link = props.link;
  return (
    <div className="project-card">
    <a className="project-card-link" href={link} title={title} target="_blank"rel="noopener noreferrer">
      <img className="project-video" src={require(`../projects/${video}`)} alt={video} />
      <div className="project-details">
        <p className="project-title">
          {title}
        </p>
        <p className="project-desc">{description}</p>
      </div>
    </a>
    </div>
  );
}

export default ProjectCard;