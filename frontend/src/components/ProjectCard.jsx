import React from "react";

export default function ProjectCard({ project }){
  return (
    <div className="project-card card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{marginBottom:8}}>
        {project.technologies?.slice(0,5).map((t,i)=><span key={i} style={{marginRight:8,color:"var(--muted)"}}>{t}</span>)}
      </div>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank">Github</a>}
        {project.demo && <a href={project.demo} target="_blank">Live Demo</a>}
      </div>
    </div>
  );
}
