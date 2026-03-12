const hre = require("hardhat");

async function main() {

  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();

  await staking.waitForDeployment();

  console.log("Staking deployed to:", await staking.getAddress());
}

main();
