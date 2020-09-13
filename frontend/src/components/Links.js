import React from "react";
import ResumePNG from "../assets/images/resume.png"
import GitHubPNG from "../assets/images/github.png"
import LinkedInPNG from "../assets/images/linkedin.png"
import EmailPNG from "../assets/images/email.png"
import Resume from "../assets/resume.pdf"

function Links() {
  return (
    <div className="links">
      <a className="link-resume" href={Resume} target="_blank" rel="noopener noreferrer"><img src={ResumePNG} alt="resume.png"/></a>
      <a className="link-github" href="https://www.github.com/josephjdkim" target="_blank" rel="noopener noreferrer"><img src={GitHubPNG} alt="github.png"/></a>
      <a className="link-linkedin" href="https://www.linkedin.com/in/josephjdkim/" target="_blank" rel="noopener noreferrer"><img src={LinkedInPNG} alt="linkedin.png"/></a>
      <a className="link-email" href="mailto:josephjdkim@gmail.com" target="_top"><img src={EmailPNG} alt="email.png"/></a>
    </div>
  );
}

export default Links;