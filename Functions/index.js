const { Network, Alchemy, Utils } = require("alchemy-sdk");

const settings = {
  apiKey: "c609qx6p1WPIwlHJbyzdUZy9vvOhCe5t",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getBlock() {
  const latestBlock = await alchemy.core.getBlockNumber(); // Returns the best guess of the current gas price to use in a transaction.
  // const gasPrice = await alchemy.core.getGasPrice(); //Returns the recommended fee data to use in a transaction.
  console.log("The latest block number is", latestBlock);
  // console.log("The gas Price", gasPrice);
}

// // Get a Block By Its Block Hash on Ethereum
// async function getBlockByHash() {
//   const block = await alchemy.core.getBlock(
//     "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
//   );
//   console.log("Block by hash is " + block.number);
// }

// // Get a Block By Its Block Number on Ethereum
// async function getBlockByNumber() {
//   const block = await alchemy.core.getBlock(15221026);
//   console.log("Block by block Number is " + block.number);
// }

// // Gas Estimate
// async function gasEstimate() {
//   const gasEstimate = await alchemy.core.estimateGas({
//     to: "vitalik.eth",
//     // parsing 1 ETH to wei using Utils
//     value: Utils.parseEther("1.0"),
//   });
//   console.log("gasEstimate " + gasEstimate);
// }

// Get the latest usdt balance
async function getUsdtBalance() {
  const walletAddress = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";
  const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  let balance = await alchemy.core.getTokenBalances(walletAddress, [
    contractAddress,
  ]);
  const numDecimals = 6;
  balance = balance["tokenBalances"][0]["tokenBalance"];
  balance = (parseInt(balance) / 10 ** numDecimals).toFixed(2);
  console.log("Balance:", balance, "USDT");
}
getBlock();
getUsdtBalance();
// getBlockByHash();
// getBlockByNumber();
// gasEstimate();
