import React from "react";
import ResumePNG from "../assets/images/resume.png"
import ResumeYellowPNG from "../assets/images/resume_yellow.png"
import GitHubPNG from "../assets/images/github.png"
import GitHubYellowPNG from "../assets/images/github_yellow.png"
import LinkedInPNG from "../assets/images/linkedin.png"
import LinkedInYellowPNG from "../assets/images/linkedin_yellow.png"
import EmailPNG from "../assets/images/email.png"
import EmailYellowPNG from "../assets/images/email_yellow.png"

import Resume from "../assets/resume.pdf"

function Links() {
  return (
    <div className="links">
      <a className="link-resume" href={Resume} title="Resume" target="_blank"rel="noopener noreferrer">
        <img className="link-img" src={ResumePNG} alt="resume.png"
        onMouseOver={e => (e.currentTarget.src=ResumeYellowPNG)}
        onMouseOut={e => (e.currentTarget.src=ResumePNG)}
        />
      </a>
      <a className="link-github" href="https://www.github.com/josephjdkim" title="GitHub @josephjdkim" target="_blank" rel="noopener noreferrer">
        <img className="link-img" src={GitHubPNG} alt="github.png"
        onMouseOver={e => (e.currentTarget.src=GitHubYellowPNG)}
        onMouseOut={e => (e.currentTarget.src=GitHubPNG)}
        />
      </a>
      <a className="link-linkedin" href="https://www.linkedin.com/in/josephjdkim/" title="LinkedIn @josephjdkim" target="_blank" rel="noopener noreferrer">
        <img className="link-img" src={LinkedInPNG} alt="linkedin.png"
        onMouseOver={e => (e.currentTarget.src=LinkedInYellowPNG)}
        onMouseOut={e => (e.currentTarget.src=LinkedInPNG)}
        />
      </a>
      <a className="link-email" href="mailto:josephjdkim@gmail.com" title="josephjdkim@gmail.com" target="_top">
        <img className="link-img" src={EmailPNG} alt="email.png"
        onMouseOver={e => (e.currentTarget.src=EmailYellowPNG)}
        onMouseOut={e => (e.currentTarget.src=EmailPNG)}
        />
      </a>
    </div>
  );
}

export default Links;