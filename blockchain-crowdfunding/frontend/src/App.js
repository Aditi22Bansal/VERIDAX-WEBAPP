import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; // Import your CSS file

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    const { data } = await axios.get("http://localhost:5000/campaigns");
    setCampaigns(data);
  };

  const createCampaign = async () => {
    try {
      // Ensure values are not empty
      if (!title.trim() || !description.trim() || !goal) {
        alert("All fields are required!");
        return;
      }

      // Ensure goal is a valid number
      const goalAmount = Number(goal);
      if (isNaN(goalAmount) || goalAmount <= 0) {
        alert("Goal must be a positive number!");
        return;
      }

      const response = await axios.post("http://localhost:5000/create", {
        title: title.trim(),
        description: description.trim(),
        goal: goalAmount,
      });

      console.log("Campaign created:", response.data);
      alert("Campaign created successfully!");
      fetchCampaigns();
    } catch (error) {
      console.error("Error creating campaign:", error.response?.data || error.message);
      alert("Failed to create campaign. Check console for details.");
    }
  };

  return (
    <div className="container">
      <h1>Crowdfunding DApp</h1>

      <div className="input-wrapper">
        <h2 className="form-title">Create New Campaign</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={createCampaign}>Create Campaign</button>
      </div>

      <h2>Active Campaigns</h2>
      <div className="campaign-container">
        {campaigns.map((c, index) => (
          <div key={index} className="campaign-card">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p className="goal">Goal: ${c.goal}</p>
            <p className="raised">Raised: ${c.raisedAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
