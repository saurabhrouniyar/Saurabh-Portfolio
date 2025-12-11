import React from "react";
import './Professional.css'
export default function Professional() {
    return (
        <section className="section container" id="professional">

            {/* Center Title */}
            <div className="prof-title-wrap">
                <p className="prof-main-title">My Professional</p>
                <h1 className="prof-sub-title">Experience</h1>
            </div>

            {/* Resume Style Card */}
            <div className="prof-card">

                {/* Dates on Right Side */}
                <div className="prof-date">
                    June - 2025 to July - 2025
                </div>

                {/* Content */}
                <h3 className="prof-company">ApexPlanet Software Pvt. Ltd.</h3>
                <h4 className="prof-role">FrontEnd-Developer</h4>

                <p className="prof-description">
                    • Shoe Garden (Footwear E-Commerce Concept Website).
                </p>
                <p className="prof-description">• Designed and developed a visually appealing footwear-themed website using HTML, CSS, and JS.</p>
                <p className="prof-description">• Built fully responsive pages optimized for mobile, tablet, and desktop screens.</p>
                <p className="prof-description">• Added dynamic UI interactions, product listings, and streamlined navigation.</p>
                <p className="prof-description">• Improved design consistency, accessibility, and overall user experience.</p>


            </div>

        </section>
    );
}
