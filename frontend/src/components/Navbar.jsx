import React from "react";

export default function Navbar(){
  return (
    <nav className="container">
      <div className="brand">Saurabh <span>Kumar</span></div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/src/assets/Saurabh_MCA_RESUME.pdf" download>Download CV</a>
      </div>
    </nav>
  );
}
