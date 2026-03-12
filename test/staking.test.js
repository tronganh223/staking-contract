const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Staking Contract", function () {

  let staking;
  let owner;

  beforeEach(async function () {

    [owner] = await ethers.getSigners();

    const Staking = await ethers.getContractFactory("Staking");
    staking = await Staking.deploy();

    await staking.waitForDeployment();

  });

  it("Should allow user to stake ETH", async function () {

    await staking.stake({ value: ethers.parseEther("1") });

    const balance = await staking.balances(owner.address);

    expect(balance).to.equal(ethers.parseEther("1"));

  });

  it("Should allow user to withdraw ETH", async function () {

    await staking.stake({ value: ethers.parseEther("1") });

    await staking.withdraw(ethers.parseEther("1"));

    const balance = await staking.balances(owner.address);

    expect(balance).to.equal(0);

  });

});
