require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/crowdfunding", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Campaign model
const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  goal: Number,
  raisedAmount: Number,
  completed: Boolean,
});
const Campaign = mongoose.model("Campaign", CampaignSchema);

// Create campaign
app.post("/create", async (req, res) => {
    try {
      console.log("Received Request Body:", req.body); // Debugging

      const { title, description, goal } = req.body;

      if (!title || !description || !goal) {
        return res.status(400).json({ error: "All fields are required!" });
      }

      if (typeof goal !== "number" || goal <= 0) {
        return res.status(400).json({ error: "Goal must be a positive number!" });
      }

      const newCampaign = new Campaign({
        title,
        description,
        goal,
        raisedAmount: 0,
        completed: false,
      });

      await newCampaign.save();
      res.json(newCampaign);
    } catch (error) {
      console.error("Error creating campaign:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


// Fetch campaigns
app.get("/campaigns", async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

app.listen(5000, () => console.log("Server running on port 5000"));
