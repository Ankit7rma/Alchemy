const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block("Ankit", "")];
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(newBlock);
  }
  isValid() {
    let chainLength = this.chain.length;
    if (chainLength == 1) {
      return true;
    }
    let res = true;
    for (let i = 1; i < this.chain.length; i++) {
      if (
        this.chain[i].previousHash.toString() !==
        this.chain[i - 1].toHash().toString()
      ) {
        res = false;
      }
    }
    return res;
  }
}

module.exports = Blockchain;
