require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalBalance(addresses) {
  const batch = addresses.map((address, index) => ({
    jsonrpc: "2.0",
    id: index,
    method: "eth_getBalance",
    params: [address, "latest"],
  }));

  const { data } = await axios.post(url, batch);

  const totalBalance = data.reduce(
    (acc, cur) => parseInt(acc, 16) + parseInt(cur.result, 16),
    0
  );

  return totalBalance;
}

module.exports = getTotalBalance;
