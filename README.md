# Staking Contract

A simple staking smart contract built with Solidity and Hardhat.

This project demonstrates a basic staking mechanism where users can stake ETH, withdraw their funds, and claim rewards.

---

## Features

* Stake ETH
* Withdraw staked funds
* Earn staking rewards
* Claim rewards

---

## Tech Stack

* Solidity
* Hardhat
* ethers.js
* Node.js

---

## Project Structure

```
staking-contract/
│
├── contracts
│   └── Staking.sol
│
├── scripts
│   └── deploy.js
│
├── test
│   └── staking.test.js
│
├── hardhat.config.js
├── package.json
├── .env.example
└── README.md
```

---

## Installation

Clone the repository

```
git clone https://github.com/your-username/staking-contract.git
cd staking-contract
```

Install dependencies

```
npm install
```

---

## Compile Contracts

```
npx hardhat compile
```

---

## Run Tests

```
npx hardhat test
```

---

## Deploy Contract

```
npx hardhat run scripts/deploy.js --network localhost
```

---

## Future Improvements

* ERC20 token staking
* reward distribution logic
* time-based rewards
* unstake cooldown

---

## License

MIT
