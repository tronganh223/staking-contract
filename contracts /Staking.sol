// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Staking {

    mapping(address => uint) public balances;
    mapping(address => uint) public rewards;

    function stake() public payable {
        require(msg.value > 0, "Stake must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint amount) public {
        require(balances[msg.sender] >= amount, "Not enough balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function reward() public {
        rewards[msg.sender] += balances[msg.sender] / 10;
    }

    function claimReward() public {
        uint rewardAmount = rewards[msg.sender];
        rewards[msg.sender] = 0;

        payable(msg.sender).transfer(rewardAmount);
    }
}
