// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Crowdfunding {
    struct Campaign {
        address creator;
        string title;
        string description;
        uint256 goal;
        uint256 raisedAmount;
        bool completed;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount = 0;

    event CampaignCreated(uint256 id, string title, address creator);
    event CampaignSupported(uint256 id, uint256 amount, address supporter);

    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _goal
    ) public {
        require(_goal > 0, "Goal must be greater than zero");

        campaigns[campaignCount] = Campaign(
            msg.sender,
            _title,
            _description,
            _goal,
            0,
            false
        );

        emit CampaignCreated(campaignCount, _title, msg.sender);
        campaignCount++;
    }

    function supportCampaign(uint256 _id) public {
        require(_id < campaignCount, "Campaign does not exist");
        Campaign storage campaign = campaigns[_id];

        require(!campaign.completed, "Campaign already completed");

        campaign.raisedAmount += 1; // Simulated contribution (not real money)
        emit CampaignSupported(_id, 1, msg.sender);

        if (campaign.raisedAmount >= campaign.goal) {
            campaign.completed = true;
        }
    }

    function getCampaign(uint256 _id) public view returns (Campaign memory) {
        require(_id < campaignCount, "Campaign does not exist");
        return campaigns[_id];
    }
}
