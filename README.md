# Hardhat FundMe Smart Contract

Welcome to the Hardhat FundMe Smart Contract repository! This smart contract provides a crowdfunding solution with options to fund an amount above a minimum value of Ether (ETH). The contract allows contributors to make meaningful contributions, and the owner has the exclusive ability to withdraw funds.

## Features

### Fund

Contributors can support the cause by sending Ether (ETH). A minimum contribution amount is set to ensure meaningful contributions.

To fund the contract, run:

```bash
npx hardhat run scripts/fund.js
# or
yarn hardhat run scripts/fund.js
```

### Withdraw

The owner of the contract can withdraw funds as needed, providing flexibility in managing the crowdfunding campaign.

To withdraw funds, run:

```bash
npx hardhat run scripts/withdraw.js
# or
yarn hardhat run scripts/withdraw.js
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

Create a `.env` file in the root directory with the following content:

```env
SEPOLIA_RPC_URL=<your-rpc-url>
PRIVATE_KEY=<your-private-key>
```

Replace `<your-rpc-url>` with the RPC URL of your Ethereum network and `<your-private-key>` with the private key of the account deploying the contract.

### Deployment

Deploy the Hardhat FundMe smart contract:

```bash
npx hardhat run scripts/deploy.js
# or
yarn hardhat run scripts/deploy.js
```

### Interacting with the Contract

Explore the contract's functionality by interacting with it through scripts or applications. Make sure you have the required accounts and Ether for transactions.

## Contributing

Feel free to contribute to the development of the Hardhat FundMe smart contract. If you encounter any issues or have suggestions, please open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

Happy crowdfunding with Hardhat FundMe! 🚀
