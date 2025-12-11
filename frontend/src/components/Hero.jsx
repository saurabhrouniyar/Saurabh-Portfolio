import React from "react";
import resume from "../assets/Saurabh_MCA_RESUME.pdf";
import mypic from "../assets/img.jpg"; 

export default function Hero() {
  return (
    <section className="hero container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"40px"}}>
      
      {/* LEFT SIDE TEXT */}
      <div>
        <h1>
          Hi, I'm <span style={{color:"var(--accent)"}}>Saurabh</span>
        </h1>
        <p>Full Stack Developer — React • Node • MongoDB</p>

        <a className="btn" href={resume} download>
          Download CV
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div>
        <img
          src={mypic}
          alt="profile"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid var(--accent)",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)"
          }}
        />
      </div>
    </section>
  );
}
