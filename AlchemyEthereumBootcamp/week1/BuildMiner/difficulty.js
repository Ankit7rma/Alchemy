const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  return mempool.push(transaction);
}

function mine() {
  // TODO: mine a block

  let transactions = [];
  let count = 0;
  while (mempool.length > 0 && count < MAX_TRANSACTIONS) {
    count += 1;
    transactions.push(mempool.pop());
  }
  let newBlock = {
    id: blocks.length,
    transactions: transactions,
    nonce: 0,
  };

  const stringifyBlock = SHA256(JSON.stringify(newBlock));
  newBlock.hash = stringifyBlock;

  while (BigInt(`0x${newBlock.hash.toString()}`) > TARGET_DIFFICULTY) {
    newBlock.nonce++;
    const stringifyBlock1 = SHA256(JSON.stringify(newBlock));
    newBlock.hash = stringifyBlock1;
  }

  blocks.push(newBlock);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
