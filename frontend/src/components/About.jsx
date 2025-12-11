import React from "react";
import mypic from "../assets/img02.jpg";

export default function About() {
  return (
    <section className="section container" id="about">

      {/* TOP CENTER HEADING */}
      <div className="about-title-wrapper">
        <h3 className="about-top-small">Get to Know More</h3>
        <h2 className="about-top-big">About Me</h2>
      </div>

      {/* IMAGE + CARDS ROW */}
      <div className="about-row">

        {/* LEFT SIDE IMAGE */}
        <img
          src={mypic}
          alt="profile"
          className="about-img"
        />

        {/* RIGHT SIDE CARDS */}
        <div className="about-cards">
          <div className="about-card">
            <h3>Experience</h3>
            <p>2+ month working on MERN Stack projects</p>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <p>MCA [2024-26] - KIET GROUP OF INSTITUTIONS</p>
          </div>
        </div>

      </div>

      {/* LONG ABOUT CONTENT */}
      <p className="about-long-text">
        I'm a full stack developer building modern, accessible & responsive web applications 
        with React, Node and MongoDB. I enjoy creating smooth user experiences and 
        clean backend logic. I love working on real-world projects, solving problems 
        and learning new technologies every day.
      </p>

    </section>
  );
}
