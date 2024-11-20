const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [new Block("Ankit", "")];
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
