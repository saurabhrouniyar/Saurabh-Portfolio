import React, { useRef } from "react";

export default function SkillCard({ title, image }) {
  const cardRef = useRef(null);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 12) * -1;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.07)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(600px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      className="skill-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-icon">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
