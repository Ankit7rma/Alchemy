const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: "Demo", // Replace with App Api
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getBlock() {
  const latestBlock = await alchemy.core.getBlockNumber();
  const gasPrice = await alchemy.core.getGasPrice();
  console.log("The latest block number is", latestBlock);
  console.log("The gas Price", gasPrice);
}

getBlock();
