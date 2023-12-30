const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = parseInt(network.config.chainId); // Parse chainId to ensure it's a number
    let ethUsdPriceFeedAddress;

    if (chainId === 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }

    log("Deploying FundMe and waiting for confirmations...");
    const FundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1, // Fix typo in blockConfirmations
    });

    log(`FundMe deployed at ${FundMe.address}`);

    if (chainId !== 31337 && process.env.ETHERSCAN_API_KEY) { // Fix condition
        await verify(FundMe.address, ethUsdPriceFeedAddress);
    }
};

module.exports.tags = ["all", "fundme"];
