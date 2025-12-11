const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    const msg = await Message.create({ name, email, message });
    res.status(201).json({ success: true, data: msg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
