const hre = require("hardhat");

async function main() {
    const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy(); // Remove .deployed()

    console.log(`Crowdfunding contract deployed at: ${crowdfunding.target}`); // Use .target instead of .address
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
