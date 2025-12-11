import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/projects`);
        if (res.data.success) setProjects(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <section className="section container" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid" style={{marginTop:16}}>
        {projects.length === 0 ? <p style={{color:"var(--muted)"}}>No projects yet — seed the DB or add projects from backend.</p> : projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>
    </section>
  );
}
