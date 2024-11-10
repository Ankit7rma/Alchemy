const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: "Demo",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getBlock() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

getBlock();
