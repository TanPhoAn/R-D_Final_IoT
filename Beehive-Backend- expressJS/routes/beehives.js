const express = require("express");
const router = express.Router();
const Beehive = require("../models/Beehive");
const auth = require("../middleware/authMiddleware");
const { getRandomFloat } = require("../utils");

// CREATE
router.post("/", auth, async (req, res) => {
  try {
    const beehive = await Beehive.create({
      name: req.body.name,
      queen_birth_date: req.body.queen_birth_date,
      note: req.body.note,
      user_id: req.user.id,
    });
    res.status(201).json(beehive);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all for current user
router.get("/", auth, async (req, res) => {
  try {
    const beehives = await Beehive.find({ user_id: req.user.id });
    // TODO: Call questDB to get detail info

    // Add fake random sensor data to each hive
    const beehivesWithStats = beehives.map((hive) => ({
      ...hive.toObject(),
      temperature: getRandomFloat(34, 36), // Celsius
      humidity: getRandomFloat(60, 80), // Percentage
      weight: getRandomFloat(25, 35), // kg
      uvIndex: getRandomFloat(0, 8), // UV Index scale
      deviceBattery: getRandomFloat(50, 100), // Percentage
    }));

    res.json(beehivesWithStats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ single by ID (only if owned)
router.get("/:id", auth, async (req, res) => {
  try {
    const beehive = await Beehive.findOne({
      _id: req.params.id,
      user_id: req.user.id,
    });
    if (!beehive) return res.status(404).json({ error: "Not found" });
    res.json(beehive);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE (only if owned)
router.put("/:id", auth, async (req, res) => {
  try {
    const beehive = await Beehive.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user.id },
      {
        name: req.body.name,
        queen_birth_date: req.body.queen_birth_date,
        note: req.body.note,
      },
      { new: true, runValidators: true }
    );
    if (!beehive)
      return res.status(404).json({ error: "Not found or unauthorized" });
    res.json(beehive);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE (only if owned)
router.delete("/:id", auth, async (req, res) => {
  try {
    const beehive = await Beehive.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user.id,
    });
    if (!beehive)
      return res.status(404).json({ error: "Not found or unauthorized" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
