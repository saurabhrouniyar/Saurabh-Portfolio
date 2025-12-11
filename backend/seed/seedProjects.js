// run with `npm run seed` from backend
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("../config/db");
const Project = require("../models/Project");

const data = [
  {
    title: "Personal Portfolio",
    description: "Portfolio built with React, Node and MongoDB.",
    technologies: ["React", "Vite", "Node", "Express", "MongoDB"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.example",
    image: ""
  },
  {
    title: "Task Manager",
    description: "Todo app with JWT auth and real-time sync.",
    technologies: ["React", "Node", "Socket.io"],
    github: "",
    demo: "",
    image: ""
  }
];

async function seed() {
  try {
    await connectDB();
    await Project.deleteMany({});
    await Project.insertMany(data);
    console.log("Seeded projects");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
