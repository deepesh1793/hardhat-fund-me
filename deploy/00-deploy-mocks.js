const { network } = require("hardhat");
const { developmentChains, decimals, initialAnswer } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;
    //console.log(chainId);
    if (developmentChains.includes(chainId)) {
        log("Local network detected! Deploying mocks..");
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [decimals, initialAnswer],
        });
        log("Mocks deployed.");
    }
};
module.exports.tags = ["all", "mocks"];
