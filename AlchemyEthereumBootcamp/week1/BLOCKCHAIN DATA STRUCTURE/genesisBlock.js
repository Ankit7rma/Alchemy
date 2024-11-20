const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block("Ankit")];
  }
}

module.exports = Blockchain;
