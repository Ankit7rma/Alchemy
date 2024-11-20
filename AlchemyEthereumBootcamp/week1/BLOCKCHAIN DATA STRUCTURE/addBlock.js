const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block("Ankit")];
  }
  addBlock(newBlock) {
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
