import React from "react";

export default function Contact() {
  return (
    <section className="section container" id="contact">

      {/* Heading */}
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Contact Me</p>

      {/* Contact Card */}
      <div className="contact-card">

        {/* Email */}
        <a 
          href="mailto:saurabhkumar9123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fas fa-envelope"></i>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/saurabh-kumar-a92791315/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/saurabhrouniyar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="fab fa-github"></i>
        </a>

      </div>

    </section>
  );
}
