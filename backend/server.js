require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const messageRoutes = require("./routes/messageRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

app.get("/", (req, res) => res.send("Portfolio API running"));

app.use("/api/message", messageRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
