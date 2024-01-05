
# Blockchain Test Project

## Overview

This project is a blockchain application developed using Ethereum smart contracts. It is designed to demonstrate basic functionalities of blockchain technology and smart contract development.

## Prerequisites

- Node.js
- Truffle Framework
- Ganache (for local blockchain development)


## Project Structure

- `build/`: Contains compiled contracts and build scripts.
- `contracts/`: Smart contracts for the project.
- `migrations/`: Scripts for deploying contracts.
- `test/`: Test scripts for the smart contracts.
- `truffle-config.js`: Configuration file for Truffle.

## Running the Project

1. Start your local blockchain using Ganache.
2. Compile the smart contracts:
   ```
   truffle compile
   ```
3. Deploy the contracts to the blockchain:
   ```
   truffle migrate
   ```
4. Run tests:
   ```
   truffle test
   ```
