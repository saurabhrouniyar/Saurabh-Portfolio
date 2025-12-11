import React from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    { title: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { title: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { title: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { title: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { title: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { title: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { title: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { title: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  return (
    <section className="section container" id="skills">
      <h2 className="skills-heading modern-skill-title">
        <span>⚡ Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <SkillCard key={i} title={s.title} image={s.image} />
        ))}
      </div>
    </section>
  );
}
