const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  github: String,
  demo: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
