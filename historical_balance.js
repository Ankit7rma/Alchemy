const { Alchemy, Network } = require("alchemy-sdk"); // Import Alchemy SDK
const ethers = require("ethers"); // Correct import for ethers

// Alchemy configuration
const config = {
  apiKey: "c609qx6p1WPIwlHJbyzdUZy9vvOhCe5t", // Replace with your Alchemy API key
  network: Network.ETH_MAINNET, // Ethereum mainnet
};
const alchemy = new Alchemy(config);

const main = async () => {
  try {
    // Wallet address
    const walletAddress = "0xef0dcc839c1490cebc7209baa11f46cfe83805ab";

    // USDT contract address
    const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const numDecimals = 6;

    // Block number
    const blockNum = 12026456;

    // ABI for the balanceOf function
    const abi = ["function balanceOf(address account)"];

    // Create a function call data using ethers Interface
    const iface = new ethers.Interface(abi); // FIX: Use ethers.Interface directly
    const data = iface.encodeFunctionData("balanceOf", [walletAddress]);

    // Call the smart contract using Alchemy's `eth_call` at the specified block
    let balance = await alchemy.core.call(
      {
        to: contractAddress, // Contract address
        data: data, // Encoded function data
      },
      blockNum // Specific block number
    );

    // Decode and format the balance
    balance = (parseInt(balance, 16) / 10 ** numDecimals).toFixed(2);
    console.log("Balance:", balance, "USDT");
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

// Wrapper to handle execution
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
