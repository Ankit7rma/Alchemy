const { Network, Alchemy, Utils } = require("alchemy-sdk");

const settings = {
  apiKey: "Demo", // Replace with App Api
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getBlock() {
  const latestBlock = await alchemy.core.getBlockNumber(); // Returns the best guess of the current gas price to use in a transaction.
  const gasPrice = await alchemy.core.getGasPrice(); //Returns the recommended fee data to use in a transaction.
  console.log("The latest block number is", latestBlock);
  console.log("The gas Price", gasPrice);
}

// Get a Block By Its Block Hash on Ethereum

async function getBlockByHash() {
  const block = await alchemy.core.getBlock(
    "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
  );
  console.log("Block by hash is " + block.number);
}
getBlockByHash();

// async function main() {
//   const gasEstimate = await alchemy.core.estimateGas({
//     to: "vitalik.eth",
//     // parsing 1 ETH to wei using Utils
//     value: Utils.parseEther("1.0"),
//   });
//   console.log("gasEstimate " + gasEstimate);
// }

// main();

getBlock();
